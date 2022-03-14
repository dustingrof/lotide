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

module.exports = letterPositions;