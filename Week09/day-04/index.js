const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const mysql = require('mysql');
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'szapszap',
  password: 'Seiyastar*0',
  database: 'quiz',
  port: 3306,
});

app.get('/game', (req, res) => {
  conn.query('SELECT * FROM questions;', (err, response) => {
    if (err) {
      res.status(400).json({
        error: 'Wrong request',
      });
    } else {
      res.json(response); 
    }
    const question = response[Math.floor(Math.random() * (response.length - 1)) + 1];
    conn.query(`SELECT * FROM answers WHERE answers.question_id = ${question.id};`, (err, answers) => {
      if (err) {
        res.status(400).json({
          error: 'Wrong request',
        });
      } else {
        res.json({
          id: question.id,
          question: question.question,
          answers,
        }); 
      }
    })
  })
});

app.get('/questions', (req, res) => {
  conn.query('SELECT * FROM questions;', (err, response) => {
    if (err) {
      res.status(400).json({
        error: 'Wrong request',
      });
    } else {
      res.json(response); 
    }
  })
});

app.post('/questions', (req, res) => {
  const {
    question, answer_1, is_correct1, answer_2, is_correct2, answer_3, is_correct3, answer_4, is_correct4
  } = req.body;
  if (parseInt(is_correct1) + parseInt(is_correct2) + parseInt(is_correct3) + parseInt(is_correct4) !== 1) {
    res.json({
      error: 'Please provide one correct answer!'
    })
    return;
  }

  conn.query(`INSERT INTO questions (question) VALUES ("${question}");`, (err, response) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        error: 'Wrong request',
      });
    } else {
      let questionID = question.insertId;
      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (${questionID}, "${answer_1}", ${is_correct1}),
      (${questionID}, "${answer_2}", ${is_correct2}),
      (${questionID}, "${answer_3}", ${is_correct3}),
      (${questionID}, "${answer_4}", ${is_correct4});`, question, (err, response) => {
        if (err) {
          res.status(400).json({
            error: 'Wrong request',
          });
        } else {
          res.json({response: "success"});
        }
      }
    )};
  });
});

app.delete('/questions/:id', (req, res) => {
  let deleteFromAnswers = `DELETE FROM answers WHERE question_id = ${req.params.id};`;
  let deleteFromQuestions = `DELETE FROM questions WHERE id = ${req.params.id};`;
  conn.query(deleteFromQuestions, (err, result) => {
    if (err) {
      res.status(400).json({
        error: 'Wrong request',
      });
    } else {
      conn.query(deleteFromAnswers, (err, result) => {
        if (err) {
          res.status(400).json({
            error: 'Wrong request',
          });
        } else {
          res.json({response: "success"});
        }
      });
    }
  });
});


app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
