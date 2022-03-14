const without = function(source, itemsToRemove) {
  for (let s = 0; s < source.length; s++) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (source[s] === itemsToRemove[i]) {
        source.splice(s, 1);
        //console.log(source);
      }
    }
  }
  //console.log(source);
  return source;
};

module.exports = without;