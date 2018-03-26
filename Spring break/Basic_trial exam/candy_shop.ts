'use strict';

abstract class Sweet {
  price: number;
  sugar: number;

  constructor(getPrice: number, sugarAm: number) {
    this.price = getPrice;
    this.sugar = sugarAm;
  }

  raisePrice() {

  }
}

class Lollipop extends Sweet {
  price = 10;
  sugar = 5;

}

class Candy extends Sweet {
  price = 20;
  sugar = 10;
}

class CandyShop {
  sugar: number;
  income: number;
  storage: string[] = [];

  constructor(sugarG: number) {
    this.sugar = sugarG;
    this.storage = this.storage;
  }

  createSweets(Sweet: any) {
    this.storage.push(Sweet);
  }
}

let lolli = new Lollipop(10, 5);
let candy = new Candy(20, 10);
let candyshop = new CandyShop(200);
candyshop.createSweets(Lollipop);
candyshop.createSweets(Lollipop);
candyshop.createSweets(Candy);
console.log(candyshop.storage);
console.log(candyshop.sugar);