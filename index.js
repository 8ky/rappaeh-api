const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.listen(3000);

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, () => console.log('Ky DB Connected!'));
