// implement the function
const assertEqual = function(actual, expected) {
  return (actual === expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  return array.length > 1 ? array.slice(1, array.length) : [];
};

// Test Case 1: Check the returned array elements
const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
assertEqual(words.length, 3); // original array should still have 3 elements!