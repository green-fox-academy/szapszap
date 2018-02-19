'use strict'

// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printer(argArray: any[]) {
    argArray.forEach(function(element){
        console.log(element);
    });
    
}

let myArray: any[] = [2, "hello", true];
printer(myArray);