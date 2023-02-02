// DEPENDENCIES
const express = require('express');
// CONFIGURATION
const app = express();
const artistsController = require('./controllers/artistsController.js')
const cors = require('cors');

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use('/artists', artistsController)

// ROUTES
app.get('/', (req, res) => {
  res.send('<h1> 👩🏽‍🎨🎨Artist at Work!🎨👨🏻‍🎨</h1>');
});


app.get('*', (req, res) => {
  res.status(404).send('Sorry you made a wrong turn');
});

// EXPORT
module.exports = app;
