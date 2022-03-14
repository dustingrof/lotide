
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

module.exports = middle;