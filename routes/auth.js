const User = require('../models/User.js')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10)

  const hashed = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: hashed,
    role: req.body.role
  })

  const emailExists = await User.findOne({
    email: req.body.email
  })

  if (emailExists) return res.status(400).send('Email Exists')

  try {
    const registeredUser = await user.save()
    res.json(registeredUser)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/login', async (req, res) => {
  const loggedUser = await User.findOne({
    email: req.body.email
  })
  if (!loggedUser) return res.status(400).send('Email not found')
  const validPass = await bcrypt.compare(req.body.password, loggedUser.password)
  if (!validPass) return res.status(400).send('invalid Password')

  const token = jwt.sign({ _id: loggedUser._id }, process.env.TOKEN_SECRET)

  res.header('auth-token', token)

  res.send(`Logged ${token}`)
})

module.exports = router
