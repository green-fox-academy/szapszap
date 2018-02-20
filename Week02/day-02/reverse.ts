'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reverse: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
console.log(reverseString(reverse));