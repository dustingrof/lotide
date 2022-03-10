const assertEqual = function(actual, expected) {
  return (actual === expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
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


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false