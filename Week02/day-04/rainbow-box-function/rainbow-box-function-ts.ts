'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
// let a: number = 20;

let x: number = 200;
let color: string;

function drawSquares(x: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(canvas.width / 2 - x / 2, canvas.height / 2 - x / 2, x, x);  
} 

let rainbow = {
    1: '#FF0000',
    2: '#FF0066',
    3: '#CD00FF',
    4: '#2200FF',
    5: '#0089FF',
    6: '#00FF80',
    7: '#5EFF00',
    8: '#EFFF00',
    9: '#FF8900',
    10: '#FF3C00',
    11: '#FF0000',
}

 for (let i = 1; i <= 11; i++) {
     x -= 20;
     color = rainbow[i];
     drawSquares(x, color);
 };