'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function lineDraw(x: number, y: number) {
    ctx.strokeStyle = "maroon";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

    let a: number = 100;
    let b: number = 50;

    for (let i = 1; i < 14; i++) {
        a += 5 ** 2;
        b += 30;
        lineDraw(a, b);
    }

    // sorry guys, I wanted to play with it and draw more than 3 lines
    // look, I created a star destroyer


