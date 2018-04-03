const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

app.use('/assets', express.static('assets'));

app.get('/doubling', (req, res) => {
  const doubling = req.query.input;
  console.log(doubling);

  if (doubling === undefined) {
    res.json({
      error: "Please provide an input!",
    });
  } else {
    res.json({
      "received": parseInt(doubling),
      "result": doubling * 2,
    });
  }
});

app.get('/greeter', (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const title = req.query.title;

  if (name === undefined || title === undefined) {
    res.json({
      error: "Please provide a name/title!"
    });
  } else {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    });
  }
});

