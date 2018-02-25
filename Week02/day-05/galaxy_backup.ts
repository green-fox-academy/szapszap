'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let x: number[] = [];
let y: number[] = [];
let amountofStars: number = 460;
let red: number = 50; 
let green: number = 50;

function stars (x: number, y: number) {
    ctx.fillStyle = 'rgba(' + red + ',' + green + ', 255)';
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI * 2);
    ctx.fill();
} 

for (let i = 0; i < amountofStars; i++) {
    x[i] = (Math.random() * canvas.width), (Math.random() * canvas.height);
    y[i] = (Math.random() * canvas.width), (Math.random() * canvas.height);
    red += 1;
    green += 1;
    stars(x[i], y[i]);
}
