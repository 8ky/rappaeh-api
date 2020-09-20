const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  username: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  password: {
    type: String,
    max: 1024
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: Number
  }
})

module.exports = mongoose.model('User', userSchema)
