// DEPENDENCIES
const express = require('express');
const cors = require('cors');
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/', (req, res) => {
  res.send('<h1>👩🏽‍🎨🎨Artist at Work!🎨👨🏻‍🎨</h1>');
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

// EXPORT
module.exports = app;
