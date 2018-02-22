'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function fourRect(x: number, y: number, z: number, zs: number) {
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect(x, y, z, zs);
}

let a: number = 10;
let b: number = 10;
let c: number = 30;
let d: number = 90;

for (let i = 0; i < 4; i++) {
    a += 50;
    b += 80;
    c += 15;
    d -= 10;
    fourRect(a, b, c, d);
};

