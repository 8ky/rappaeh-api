const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    likes: req.body.likes,
    date: req.body.date,
    link: req.body.link,
    views: req.body.views
  })
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json({ message: err })
  }
})

router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({
      _id: req.params.postId
    })
    res.json(removedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      {
        _id: req.params.postId
      },
      {
        $set: {
          title: req.body.title
        }
      }
    )
    res.json(updatedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
