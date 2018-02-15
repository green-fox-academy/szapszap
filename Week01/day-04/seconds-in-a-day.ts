'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let DayInSeconds = 60 * 60 * 24;
let currentTime = currentSeconds + (60 * currentMinutes) + (60 * 60 * currentHours);

console.log(DayInSeconds - currentTime);

