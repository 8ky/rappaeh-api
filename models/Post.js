const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: 'default.jpg'
  },
  link: {
    type: String,
    default: null
  },
  views: {
    type: Number,
    default: null
  }
})

module.exports = mongoose.model('Posts', PostSchema)
