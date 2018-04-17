const express = require('express');
const app = express();

app.get('/groot/', (req, res) => {
  if (req.query.message === undefined) {
    res.json({
      error: 'I am Groot!'
    });
  } else {
    res.status(200).json({
      received: req.query,
      translated: "I am Groot!"
    });
  }





  // message: 'somemessage'  
  // res.status(200).json({ 
  //   received: "somemessage",
  //   translated: "I am Groot!"
  // });
  // if(message === undefined) {
  //   err: "I am Groot!"
  // }
});

module.exports = app;