'use strict';

export let anagram = (s1: string, s2: string) => {
    if (s1.split('').sort().join('') === s2.split('').sort().join('')) {
      return true;
    } else {
      return false;
    }
  }
  

  // console.log(anagram('bela', 'flab'));  >> False
  // console.log(anagram('bela', 'elab'));  >> True