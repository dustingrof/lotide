const assertObjectsEqual = require('../assertObjectsEqual');

//test code
console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));

// const assertArraysEqual = function(actual, expected) {
//   return eqArrays(actual, expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   // return eqArrays(actual, expected);
// };