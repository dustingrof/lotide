const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;