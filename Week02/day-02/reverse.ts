'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reverse: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
    
} 
console.log(reverseString(reverse));