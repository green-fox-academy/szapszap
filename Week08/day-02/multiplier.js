function multiplier(y) {
  return function(x) {
    return y * x;
  }
}

const duplicator = multiplier(2);
console.log(duplicator(5));
console.log(duplicator(10));

const threeTimes = multiplier(3);
console.log(threeTimes(5));
console.log(threeTimes(100));


/* function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

const multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByTwo(4)); */