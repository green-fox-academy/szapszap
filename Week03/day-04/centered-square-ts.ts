'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let radius: number = 200;
let x: number = 200;
let y: number = 200;
let p: number = 0;

function circles(x, y, radius, p) {
    if (radius > 10) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        radius /= 2;

        circles(x + radius / 1.15, y + radius / 2, radius, p);
        circles(x - radius / 1.15, y + radius / 2, radius, p);
        circles(x, y-radius, radius, p);
    }
}

circles(x, y, radius, p);


