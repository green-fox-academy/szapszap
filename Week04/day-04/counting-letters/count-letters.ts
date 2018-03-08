'use strict';

let countIt = (s: string) => {
  let letters: number = 0;
  let stringItself: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let spLit = stringItself.split("");
  for (let i = 0; i < s.length; i++) {
    if (spLit.indexOf(s[i]) > -1) {
      letters = letters + 1;
    }
  }
  return letters;
}

console.log(countIt("Hii"));