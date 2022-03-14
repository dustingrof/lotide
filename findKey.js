const findKey = (object, callback) => {
  for (const [key, value] of Object.entries(object)) {
    // console.log('object keys ', key);
    // console.log('object values ', value);
    if (callback(value)) {
      return key;
    }
  }
};
module.exports = findKey;