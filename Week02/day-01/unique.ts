'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let unique = () => {
  let myArray: number[] = [61, 12, 1, 1, 34, 34, 52, 43, 52, 61];
  // let sortArr = myArray.sort();
  // let uniqueArr: number[] = [];
  // for (let i = 0; i < sortArr.length; i++) {
  //   if (sortArr[i + 1] !== sortArr[i]) {
  //     uniqueArr.push(sortArr[i]);
  //   }
  // }
  // return uniqueArr;
  return myArray.sort().filter((e, i, a) => e !== a[i + 1]);
}

console.log(unique());

