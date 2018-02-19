'use strict'

let Name: string = "Greenfox";

function greet(Name?: string): string {
    return(Name);
}

console.log('Greetings, dear ' + greet(Name));