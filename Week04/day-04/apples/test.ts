import { test } from 'tape';
import { Apple } from './apples';



test('check apple string', t => {
    const fruit = new Apple();
    let actual = fruit.getApple("app", "le");
    let expected = "apple";
    t.equal(actual, expected);
    t.end();
});


