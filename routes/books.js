/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

// get  /books/

router.get('/', (req, res) => {
  res.json('this should return books');
});

router.get('/gatsby', (req, res) => {
  res.send('The Great Gatsby');
});

router.get('/harry-potter', (req, res) => {
  res.send('Harry Potter and the Chamber of Secrets');
});

module.exports = router;
