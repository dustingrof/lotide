// implement the function
const assertEqual = function(actual, expected) {
  return (actual === expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 1.2);
assertEqual("Bootcamp", "Bootcamp");