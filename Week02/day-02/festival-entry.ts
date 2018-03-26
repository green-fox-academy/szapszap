'use strict';

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

let securityCheck = (queue: any[]) => {
  let canEnter : string[] = [];
  queue.map(person => {
    if (person.alcohol < 1 && person.guns < 1) {
      canEnter.push(person.name);
    } 
    if (person.guns >= 1) {
      person.guns = 0;
      watchlist.push(person.name);
    }
    if (person.alcohol >= 1 && person.guns < 1) {
      securityAlcoholLoot += person.alcohol;
      person.alcohol = 0;
      canEnter.push(person.name);
    }
  }); return canEnter;
};

console.log(securityCheck(queue));
console.log(watchlist);
console.log(securityAlcoholLoot);