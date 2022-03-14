const takeUntil = (array, callback) => {
  let output = [];
  for (let item of array) {
    if (callback(item)) {
      return output;
    } else {
      output.push(item);
    }
  }
};

module.exports = takeUntil;