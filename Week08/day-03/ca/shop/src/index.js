const express = require('express')
// const path = require('path');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'szapszap',
  password: 'Seiyastar*0',
  database: 'shop',
  port: 3306,
})

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM history ORDER BY date DESC LIMIT 15;';
  conn.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.render('index', {
      title: 'Dashboard',
      history: result,
    });
  })
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

