const express = require('express')
const app = express()
const mongoose = require('mongoose')
const postsRoute = require('./routes/posts.js')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config')

app.listen(3000)
app.use(cors())
app.use(bodyParser.json())
app.use('/posts', postsRoute)

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => console.log('Ky DB Connected!')
)
