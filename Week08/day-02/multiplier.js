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