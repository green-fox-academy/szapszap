'use strict'

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw

const fs = require('fs');
let filename: string[] = ['win-o.txt', 'win-x.txt', 'draw.txt'];
let table: [
    ["","",""],
    ["","",""],
    ["","",""]
]

function winner(filename: string[]) {
    let readMe: string = fs.readFileSync(filename, 'utf-8');
    }
