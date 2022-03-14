const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test cases below
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), false); // => should FAIL