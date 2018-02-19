'use strict'

let Name: string = "Greenfox";

function greet(Name?: string) {
    console.log("Greetings, dear " + Name);
}

greet(Name);
