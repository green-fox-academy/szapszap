'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log(factorial(5));