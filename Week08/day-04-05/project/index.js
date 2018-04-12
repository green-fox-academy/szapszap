const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/static', express.static('static'));
app.use(express.json());

app.set('view engine', 'ejs');
app.get('/hello', (req, res) => {
  res.status(200).send('Hello World');
});

const con = mysql.createConnection({
  host: 'localhost',
  user: 'szapszap',
  password: 'Seiyastar*0',
  database: 'reddit'
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/posts', (req, res) => {
  con.query('SELECT * from posts', (err, rows) => {
    if(err) throw err;
    console.log('Data received from Db:\n');
    console.log(rows);
    res.render('posts', {
      rows: rows,
    });
  });
});

app.post('/posts', function (req, res) {
  const title = req.body.title;
  const content = req.body.content;
  const user = req.body.user;
  const date_posted = req.body.date_posted;
  if (title === undefined || content === undefined) {
    res.json({
      error: 'Please provide title and content of the new post!'
    });
  } else {
    const newPost = { user, title, content, date_posted };
    con.query('INSERT INTO posts SET ?', newPost, (err, rows) => {
      if (err) throw err;
      res.send({ posts: rows });
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});