const test = require('tape');
const pokerFile = require('./poker-calculator');

testCases = [
  [
    ['2H', '3D', '5S', '9C', 'KD'],
    ['2C', '3H', '4S', '8C', 'AH'],
    'White wins! - (High card: Ace)'
  ],
];

test('white wins-ace', (t) => {
  const expectedResult = 'White wins! - (High card: A)';
  const white = ['2C', '3H', '4S', '8C', 'AH'];
  const black = ['2H', '3D', '5S', '9C', 'KD'];
  t.equal(pokerFile(white, black), expectedResult);
  t.end();
});

test('black wins-ace', (t) => {
  const expectedResult = 'Black wins! - (High card: A)'
  const white = ['2C', '3H', '4S', '8C', 'KD'];
  const black = ['2H', '3D', '5S', '9C', 'AH'];
  t.equal(pokerFile(white, black), expectedResult);
  t.end();
});

test('black wins-t', (t) => {
  const expectedResult = 'Black wins! - (High card: T)'
  const white = ['2C', '3H', '4S', '8C', '9D'];
  const black = ['2H', '3D', '5S', '6C', 'TH'];
  t.equal(pokerFile(white, black), expectedResult);
  t.end();
});

test('black pair5', (t) => {
  const expectedResult = 'Black wins! - (Pair: 5)'
  const white = ['2C', '3H', '4S', '8C', 'KD'];
  const black = ['2H', '5D', '5S', 'KC', 'AH'];
  t.equal(pokerFile(white, black), expectedResult);
  t.end();
});
