'use strict';

let a: number = 24;
let out: number = 0;
// if a is even increment out by one
if ((a % 2) === 0) {
    console.log(++out)
} else {
    console.log(out)
}


let b: number = 13;
let out2: string = '';
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"
if (10 < b && b > 20) {
    out2 = "Sweet!"
    console.log(out2);
} else if (b < 10) {
    out2 = "Less!"
    console.log(out2);
} else {
    out2 = "More!"
    console.log(out2);
} 

