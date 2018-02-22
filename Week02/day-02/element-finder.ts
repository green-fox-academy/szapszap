'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(arrayItem: number[]): string {
    let seven: string = 'Noooooo';
    arrayItem.map(function(item) {
        if (item == 7) {
            seven = 'Hoorray';
        }
    });
    return seven;
}

console.log(containsSeven(numbers));