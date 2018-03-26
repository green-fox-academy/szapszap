'use strict';


let mult = (a: number) => {
  for (let b = 1; b <= 10; b++) {
    let ab = a * b;
    console.log(`${b} * ${a} = ${ab}`);
  }
}
mult(5);