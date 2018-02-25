'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let middle = canvas.width / 2;
let middleH = canvas.height / 2; 
let radius: number = 0.5;
let opacity: number = 0.4;
let density: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let x: number[] = [];
let y: number[] = [];
let amountofStars: number = 760;
let red: number = 50; 
let green: number = 50;

function stars (x: number, y: number) {
    for (let i = 0; i < density.length; i++) {
        for (let j = 0; j < density[i]; j++) {

    ctx.fillStyle = 'rgba(' + red + ',' + green + ', 255)';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
        }
    }
} 

for (let i = 0; i < amountofStars; i++) {
    x[i] = (Math.random() * canvas.width), (Math.random() * canvas.height);
    y[i] = (Math.random() * canvas.width), (Math.random() * canvas.height);
    red += 1;
    green += 1;
    stars(x[i], y[i]);
}