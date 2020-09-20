const User = require('../models/User.js')
const express = require('express')
const router = express.Router()

router.post('/register', async (req, res) => {
  const user = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  })
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
  const validPass = req.body.password === loggedUser.password
  if (!validPass) return res.status(400).send('invalid Password')
  res.send('Logged')
})

module.exports = router
