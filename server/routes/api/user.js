const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../../models/User')

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password minimum length is 6').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] })
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      })

      user = new User({
        name,
        email,
        avatar,
        password
      })

      const salt = await bcrypt.genSalt(13)

      user.password = await bcrypt.hash(password, salt)

      await user.save()

      return res.status(200).json({ msg: 'Your email has been registered!' })
    } catch (err) {
      console.error('Error from route/user: ', err.message)
      res.status(500).send('Server Error in user route')
    }
  }
)

module.exports = router