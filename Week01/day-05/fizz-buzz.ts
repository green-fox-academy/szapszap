'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let fb: number = 1;
for (let fb: number = 1; fb <= 100; fb++) {
    if ((fb % 3) === 0 && (fb % 5) === 0) {
        console.log('FizzBuzz');
    } else if ((fb % 3) === 0) {
        console.log('Fizz');
    } else if ((fb % 5) === 0) {
        console.log('Buzz');
    } else {
        console.log(fb);
    }
}