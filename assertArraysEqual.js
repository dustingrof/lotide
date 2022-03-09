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
  return (eqArrays(actual, expected) === true) ? true : false;
};

//test code
// console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]));