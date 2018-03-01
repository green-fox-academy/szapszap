'use strict'

// Write a recursive function that takes one parameter: n and counts down from n.

function firstFunction(num: number): number {
    console.log(num);
    if (num <= 1) {
        return 1;
    }
    else {
        return num - firstFunction(num - 1);
    }
}

firstFunction(6);