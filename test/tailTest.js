const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case 1: Check the returned array elements
const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
assertEqual(words.length, 3); // original array should still have 3 elements!