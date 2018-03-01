'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnies(num: number, ears: number) {
    if (num < 1 || ears < 1) {
         return 0;
    }
    else {
        return num + bunnies(num, ears - 1);
    }
}

console.log(bunnies(5, 2));