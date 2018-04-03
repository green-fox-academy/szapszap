const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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
      error: "Please provide a name/title!",
    });
  } else {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  const appendable = req.params.appendable;

  if (appendable === undefined) {
    res.status(404);
  } else {
    res.json({
      appended: appendable + "a",
    });
  }
});

app.post('/dountil/:what', (req, res) => {
  console.log(req.body);
  const num = req.body.until;
  const what = req.params.what;

  if (num === undefined) {
    res.json({
      error: "Please provide a number!",
    });
  } else if (what === 'sum') {
    res.json({
      result: num * (num + 1) / 2,
    });
  } else if (what === 'factor') {
    function factorial (num){
      if (num==0 || num==1){
        return 1;
      }
      return factorial(num-1)*num;
    } 
    res.json({
      result: factorial(num),
    });
  }
});