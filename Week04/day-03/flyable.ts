'use strict';

interface Flyable {
    land();
    fly();
    takeOff();
}

import {Animal} from "./zoo";

class Bird extends Animal implements Flyable {
    land() {};
    fly() {};
    takeOff() {};
    breed() {};
}

abstract class Vehicle {
    type: string;
    size: string;
    age: number;
}

class Helicopter extends Vehicle implements Flyable {
    land() {};
    fly() {};
    takeOff() {};
}


