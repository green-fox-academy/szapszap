require('es6-promise');

'use strict';

// var promise = new Promise(function (fulfill, reject) {
//     fulfill('I FIRED');
//     reject(new Error('I DID NOT FIRE'));
// });

// function onReject(error) {
//   console.log(error.message);
// }
// promise.then(console.log, onReject);



// var promise = new Promise(function (fulfill, reject) {
//   fulfill('PROMISE VALUE')
// });
// promise.then(console.log);
// console.log('MAIN PROGRAM');

var promise = Promise.resolve('SECRET VALUE')
Promise.reject(new Error('SECRET VALUE2'));

promise.catch(function (err) {
  console.log(err);
})