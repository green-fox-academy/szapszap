const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});