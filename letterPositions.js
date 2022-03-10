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

//create an object to track positions of each letter
//create an array to show all the positions each letter shows up
//rather than a count of the letters
const letterPositions = function(str) {
  str = str.split(' ').join('');
  const results = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};

console.log(letterPositions("abbcccdddd"));
assertArraysEqual(letterPositions("hello").e, [1]);




// const letterPositions = function(str) {
//   str = str.split(' ').join('');
//   const results = {};
//   for (const letter of str) {
//     let counter = 0;
//     if (counter < str.length) {
//       if (str[letter] === results[letter]) {
//         results[letter] = str.indexOf(letter);
//         counter += 1;
//       } else {
//         let tempVar = [results["letter"]];
//         tempVar.push(str.indexOf(letter));
//         counter += 1;
//       }
      
//     }
//   }
//   return results;
// };
