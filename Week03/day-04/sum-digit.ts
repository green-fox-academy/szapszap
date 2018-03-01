'use strict';

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigit(num: number) {
    if (num <= 1) {
        return num;
    }
    else {
        return num % 10 + sumDigit((num - num % 10) / 10);
    }
}
console.log(sumDigit(83));
