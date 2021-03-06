require('newrelic');
const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());

// Verify with loader
app.get(`/${process.env.LOADER_IO}`, (req, res) => {
  res.send(process.env.LOADER_IO);
});

app.use('/api', router);

module.exports = app;
