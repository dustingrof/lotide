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
  // return eqArrays(actual, expected);
};

const middle = function(arrayToMiddle) {
  let middleArray = [];
  if (arrayToMiddle.length <= 2) {
    return [];
  } else if (arrayToMiddle.length % 2 === 0) {
    let positionToMiddle = ((arrayToMiddle.length - 2) / 2);
    middleArray.push(arrayToMiddle[positionToMiddle],
      (arrayToMiddle[positionToMiddle] + 1));
  } else {
    let positionToMiddle = Math.floor((arrayToMiddle.length) / 2);
    middleArray.push(arrayToMiddle[positionToMiddle]);
  }
  return middleArray;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);