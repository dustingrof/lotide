// implement the function
const assertEqual = function(actual, expected) {
  return (actual === expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (object, callback) => {
  for (const [key, value] of Object.entries(object)) {
    // console.log('object keys ', key);
    // console.log('object values ', value);
    if (callback(value)) {
      return key;
    }
  }
};


  // for (const element in object) {
  //   if () {

  //   }
  // }
  // let count = 0;
  // for (let element in objKeys) {
  //   console.log('element ', element);
  //   console.log('object element ', objKeys[element]);
  //   if (callback(object[stars])) {
  //     return objKeys[element];
  //   }
  //   // count++;
  // }
  // };

//saving this code just in case...
  // for (let element in object) {
  //   if (callback(element)) {
  //     return objKeys[count];
  //   }
  //   count++;
  // }
  

// const findKeyByValue = function(obj, val) {
//   let objKeys = Object.keys(obj);
//   let count = 0;
//   for (let element in obj) {
//     if (obj[element] === val) {
//       return objKeys[count];
//     }
//     count++;
//   }
//   return undefined;
// };

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), 'Akaleri');