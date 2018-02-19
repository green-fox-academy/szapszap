'use strict'

let Name: string = "Greenfox";

function greet(Name?: string) {
    return "Greetings, dear " + Name;
}

console.log(greet(Name));
