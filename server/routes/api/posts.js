const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const auth = require('../../middleware/auth')
const User = require('../../models/User')
const Profile = require('../../models/Profile')
const Post = require('../../models/Posts')

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'To post a comment, you need to make a comment')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const user = await User.findById(req.user.id).select('-password')

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      })

      const post = await newPost.save()

      return res.status(200).json(post)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route   GET api/posts
// @desc    Get all posts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 })
    res.json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/posts/:id
// @desc    Get posts by Id
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res
        .status(404)
        .json({
          msg: 'Nope, I got nadda. Either no post by that user or the id is bad'
        })
    }

    res.json(post)
  } catch (err) {
    console.error(err.message)
    if (!err.kind === 'ObjectId') {
      return res
        .status(404)
        .json({
          msg: 'Nope, I got nadda. Either no post by that user or the id is bad'
        })
    }
    res.status(500).send('Server Error')
  }
})

// @route   DELETE api/posts/:id
// @desc    Remove a post by id
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    // check if post is true
    if (!post) {
      return res
        .status(401)
        .json({ msg: 'You have to own a post to delete it.' })
    }

    // Check the user owns the post
    if (post.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: 'You have to own a post to delete it.' })
    }

    await post.remove()
    res.json(
      'post removed. trashed, deleted, blinked out of space time, gone, swept clean.'
    )
  } catch (err) {
    console.error(err.message)
    if (!err.kind === 'ObjectId') {
      return res
        .status(404)
        .json({
          msg: 'Nope, I got nadda. Either no post by that user or the id is bad'
        })
    }
    res.status(500).send('Server Error')
  }
})

// @route   PUT api/posts/like:id
// @desc    Like a Post
// @access  Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    // check if the post has already been liked
    if (
      post.likes.filter((like) => like.user.toString() === req.params.id)
        .length > 0
    ) {
      return res
        .status(400)
        .json({ msg: 'You must like this one, but you already have.' })
    }
    post.likes.unshift({ user: req.user.id })
    await post.save()
    res.json(post.likes)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   PUT api/posts/unlike:id
// @desc    Like a Post
// @access  Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    // check if the post has already been liked
    if (
      post.likes.filter((like) => like.user.toString() === req.params.id)
        .length === 0
    ) {
      return res
        .status(400)
        .json({ msg: 'This post is very lonely and needs a like.' })
    }
    // Get remove Index
    const removeIndex = post.like
      .map((like) => like.user.toString())
      .indexOf(req.user.id)
    post.likes.splice(removeIndex, 1)
    await post.save()
    res.json(post.likes)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
