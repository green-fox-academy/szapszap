'use strict';

abstract class Animal {
    name: string;
    age: number;
    kind: string;
    tiredness: number;

    constructor(getName: string) {
        this.name = getName;
    }

    getName() {
        return this.name;
    }

    abstract breed();

    sleep() {
        this.tiredness--;
      }
}

class Reptile extends Animal {
    breed() {
        return 'laying eggs'
    }
}

class Mammal extends Animal {
    breed() {
        return 'pushing miniature versions out.'
    }
}

class Bird extends Animal {
    breed() {
        return 'laying eggs.'
    }
}

export {Animal};

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());