'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function countLines(filename: string) {
    let text = fs.readFileSync(filename, 'utf-8');
    let countMe: string[] = text.split("\n");
    return countMe.length;
    }
try {
    console.log(countLines('my-file.txt'));
}
 catch(err) {
    console.log(0);
}