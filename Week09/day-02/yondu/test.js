'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('./app');
test('yondu endpoint', (t) => {
  request(app)
  .get('/yondu?distance=100&time=10')
  .expect('Content-Type', /json/)
  .expect(200)
  .expect({
    distance: 100,
    time: 10,
    speed: 10
  })
  .end(function (err, res) {
    t.error(err);
    t.end();
  });
});

test('yondu endpoint', (t) => {
  request(app)
  .get('/yondu')
  .expect('Content-Type', /json/)
  .expect(200)
  .expect({
    error: 'One of the parameters is not provided'
  })
  .end(function (err, res) {
    t.error(err);
    t.end();
  });
});
