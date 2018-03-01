'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let size: number = 400;
let x: number = 0;
let y: number = 0;
ctx.strokeStyle = 'green';
ctx.strokeRect(x, y, size, size);
let subSize = size/3;

function drawSquare(x, y, subSize) {
    x = x + subSize;
    y = y + subSize;
    ctx.strokeStyle = 'green';
    ctx.strokeRect(x, y, subSize, subSize);
}

drawSquare



