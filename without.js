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

const without = function(source, itemsToRemove) {
  for (let s = 0; s < source.length; s++) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (source[s] === itemsToRemove[i]) {
        source.splice(s, 1);
        console.log(source);
      }
    }
  }
  //console.log(source);
  return source;
};

//test cases
//assertArraysEqual(without([1,2,3], [1]), [2,3]);
//assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
//console.log(without([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [4, 2, 6]));