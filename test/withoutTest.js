const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

//test cases
assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
console.log(without([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [4, 2, 6]));