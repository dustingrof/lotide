// implement the function
const assertEqual = function(actual, expected) {
  return (actual === expected) ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  str = str.split(' ').join('');
  let results = {};
  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
    console.log('monkey', results[letter]);
  }
  return results;
};

console.log(countLetters("A new string value for our original string property"));