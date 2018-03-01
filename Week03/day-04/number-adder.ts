'use strict';

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function adder(num: number): number {
    if (num <= 1) {
        return 1;
    }
    else {
        return num + adder(num - 1);
    }
}

console.log(adder(3));


