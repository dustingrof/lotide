const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let i in obj1) {
      if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
        if (eqArrays(obj1[i], obj2[i]) === false) {
          return false;
        }
      } else {
        if (obj1[i] !== obj2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  return eqObjects(actual, expected) ? console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

//test code
console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));

// const assertArraysEqual = function(actual, expected) {
//   return eqArrays(actual, expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   // return eqArrays(actual, expected);
// };