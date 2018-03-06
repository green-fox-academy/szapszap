'use strict'

class Garden {
    plants: Plant[] = [];

    box(Plant) {
        plants.push(yellow);
        plants.push(blue);
        plants.push(purple);
        plants.push(orange);
    }
    
}

class Plant {
    color: string;
    amountofWater: number = 0;
    needsWater: boolean;
    type: string;

   

    constructor(color) {
        this.color = color;
    }
}

class Flower extends Plant {
    constructor(color) {
        super(color);
        this.type = "Flower";
    }

    watering() {
        if (this.amountofWater < 5) {
            return this.needsWater = true;
        } else {
            return this.needsWater = false;
        }
    }
}

class Tree extends Plant {
    constructor(color) {
        super(color);
        this.type = "Tree";
    }

    watering() {
        if (this.amountofWater < 10) {
            return this.needsWater = true;
        } else {
            return this.needsWater = false;
        }
    }
}

let plants = [];
let yellow = new Flower('Yellow');
plants.push(yellow);
let blue = new Flower('Blue');
plants.push(blue);
let purple = new Tree('Purple');
plants.push(purple);
let orange = new Tree('Orange');
plants.push(orange);

let myGarden = new Garden;

//unfinished

