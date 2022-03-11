const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual, expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0] + "_");
const results3 = map(words, word => word[1]);

console.log(results1);

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results2, [ 'g_', 'c_', 't_', 'm_', 't_' ])
);
console.log(assertArraysEqual(results3, [ 'r', 'o', 'o', 'a', 'o' ]));