const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

console.log(letterPositions("abbcccdddd"));
assertArraysEqual(letterPositions("hello").e, [1]);
