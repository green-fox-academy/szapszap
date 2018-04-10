const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash = this.cash / 100 * 99;
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash = this.cash / 100 * 95;
  }
};

const Shuffler = {
  cash: 10000,
  turns: 0,
  pick: function() {
    this.cash -= 1000;
    if (this.turns % 2 === 0) {
      Panama.cash += 1000;
      console.log('Panama got 1000');
    } 
    else {
      Cyprus.cash += 1000;
      console.log('Cyprus got 1000');
    } 
    this.turns++;
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Cyprus.deposit();
Panama.deposit();

console.log(Panama.cash); 
console.log(Cyprus.cash);