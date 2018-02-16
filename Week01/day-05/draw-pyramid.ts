'use strict';

// Write a program that draws a pyramid

let lineCount: number = 4;
let star: string = '*';
let space: string = '';
for (let i: number = 1; i <= lineCount; i++) {
    for (let j: number = (lineCount - i); j > 0; j--) {
    space += ' ';
    }
    console.log(space+star);
    star += '**'; 
    space = ''; 
}