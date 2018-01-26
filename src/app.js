const express = require('express');

const app = express();

app.get('/bingo', function(req, res) {
  res.status(200);
  res.end('Bingo')
});

module.exports = app;