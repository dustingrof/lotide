const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns two items for ["Hello", "Lighthouse", "Labs"]', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result.length, 2);
  });
  it("ensure the first element is still 'Lighthouse'", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[0], 'Lighthouse');
  });
  it('ensure second element is Labs in ["Hello", "Lighthouse", "Labs"]', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[1], 'Labs');
  });
});

// Test Case 1: Check the returned array elements
// const words = ["Hello", "Lighthouse", "Labs"];
// const result = tail(words);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case: Check the original array
// assertEqual(words.length, 3); // original array should still have 3 elements!