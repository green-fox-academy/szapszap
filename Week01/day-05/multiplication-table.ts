'use strict';

// Create a program that
// prints the multiplication table with number

let a: number = 15;
let b: number = 1;
while (b <= 10) {
    let ab = a * b;
    console.log(`${b} * ${a} = ${ab}`);
    b++;
}