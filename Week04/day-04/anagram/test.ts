import { test } from 'tape';
import { anagram } from './anagram';

test('anagram test', t => {
  t.equal(anagram('bela', 'elab'), true);
  t.equal(anagram('bela', 'flab'), false);
  t.end();
})
