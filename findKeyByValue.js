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

module.exports = findKeyByValue;