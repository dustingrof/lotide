const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0] + "_");
const results3 = map(words, word => word[1]);

console.log(results1);

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results2, [ 'g_', 'c_', 't_', 'm_', 't_' ])
);
console.log(assertArraysEqual(results3, [ 'r', 'o', 'o', 'a', 'o' ]));