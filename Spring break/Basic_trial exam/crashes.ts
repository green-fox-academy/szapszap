'use strict';

// The crash-incidents.csv file contains data of road crash-incidents.
// (id; location; surface type; surface condition; light condition; weather condition; crash date; year)
// Your task will be to count how many crash-incidents happened at good/bad
// weather conditions.
// Good weather conditions are CLOUDY and CLEAR.
// Bad weather conditions are RAIN, FREEZING RAIN, SNOW, FOG and SEVERE CROSSWINDS.
// So create the necessary method(s) that returns with the amount of crash-incidents.
// And print the return value to the console:
// The amount of crashes at good weather conditions: {amount}
// The amount of crashes at bad weather conditions: {amount}

const fs = require('fs');
let filename = fs.readFileSync('./crash-incidents.csv', 'utf-8');

let countIt = (filename: string) => {
  let goodC: number = filename.match(/cloudy|clear/gi).length;
  console.log(`The amount of crashes at good weather conditions: ` + `${goodC}`);
  let badC: number = filename.match(/rain|snow|fog|"severe crosswinds"/gi).length;
  console.log(`The amount of crashes at bad weather conditions: ` + `${badC}`);
}

countIt(filename);