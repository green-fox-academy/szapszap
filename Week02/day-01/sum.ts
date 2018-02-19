'use strict'

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(8, 2, 3, 10));

  