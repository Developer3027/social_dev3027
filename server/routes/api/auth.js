const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const User = require('../../models/User')

// @route   GET api/auth
// @desc    get registered user info
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ msg: 'Server Error' })
  }
})

// @route   POST api/users
// @desc    Login User
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (!user) {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      const passMatched = await bcrypt.compare(password, user.password)

      if (!passMatched) {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '6h' },
        (err, token) => {
          if (err) {
            throw err
          }
          res.json({ token, msg: 'Your email has been registered!' })
        }
      )
    } catch (err) {
      console.error('Error from route/user: ', err.message)
      res.status(500).send('Server Error in user route')
    }
  }
)

module.exports = router
