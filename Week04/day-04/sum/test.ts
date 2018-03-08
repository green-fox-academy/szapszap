import { test } from 'tape';
import { sumIt } from './sum';

test('sum the elements', t => {
    const sumClass = new sumIt();
    t.equal(sumClass.sumFunc([2, 3, 3]), 8);
    t.equal(sumClass.sumFunc([]), 0);
    t.equal(sumClass.sumFunc([2]), 2);
    t.equal(sumClass.sumFunc([null]), 0);
    t.equal(sumClass.sumFunc([1, 'apple']), 0);
    t.end();
})

