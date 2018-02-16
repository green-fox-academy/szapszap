'use strict';
// Write a program that draws a diamond

var lineCount: number = 7;
let star: string = '*';
let space: string = '';

for (let i: number = 1; i <= lineCount / 2 + 1; i++) {
    for (let j: number = (lineCount - i); j > 0; j--) {
    space += ' ';
    }
    console.log(space+star);
    star += '**'; 
    space = ''; 
}
for (let i: number = 1; i <= lineCount / 2; i++) {
    let mSpace: number = 2;
    for (let j: number = i + mSpace; j > lineCount - 1; j++) {
        space = '';   
         
    } 
    console.log(space+star);
    space += ' ';
    mSpace = mSpace + 2;
    
} 
