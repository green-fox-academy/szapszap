const express = require('express');
const app = express();

app.get('/yondu/', (req, res) => {
  if (req.query.distance === undefined || req.query.time === undefined) {
    res.json({
      error: 'One of the parameters is not provided'
    });
  } else {
    res.status(200).json({
      distance: req.query.distance,
      time: req.query.time,
      speed: req.query.distance / req.query.time
    });
  }
});

module.exports = app;