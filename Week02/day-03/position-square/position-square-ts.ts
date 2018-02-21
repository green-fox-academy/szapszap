'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squares(x: number, y: number) {
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect(x, y, 50, 50);
};

let a: number = 10;
let b: number = 10;

for (let i = 0; i < 3; i++) {
    a += 50;
    b += 50;
    squares(a, b);
};
