'use strict'


function printer(argArray: any[]) {
    argArray.forEach(function(element){
        console.log(element);
    });
    
}

let myArray: any[] = [2, "hello", true];
printer(myArray);