'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint', (t) => {
  request(app)
  .get('/groot/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    t.error(err, 'there is an error');
    t.end();
  });
});