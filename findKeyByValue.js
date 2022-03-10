// implement the function
const assertEqual = function(actual, expected) {
  return (actual === expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, val) {
  let objKeys = Object.keys(obj);
  let count = 0;
  for (let element in obj) {
    if (obj[element] === val) {
      return objKeys[count];
    }
    count++;
  }
  return undefined;
};


//test cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



///a little too simple
// const findKeyByValue = function(obj, val) {
//   if (val in obj) {
//     return obj[val];
//   }
//   return undefined
// }