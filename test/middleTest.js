const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it('returns an empty arry when an array with one item is passed', () => {
    const result = middle([1]);
    assert.deepEqual(result, []);
  });
  it("returns an empty array when given a two item array like so '[1, 2]'", () => {
    const words = [1, 2];
    const result = middle(words);
    assert.deepEqual(result, []);
  });
  it("returns [2] when given [1, 2, 3]", () => {
    const words = [1, 2, 3];
    const result = middle(words);
    assert.deepEqual(result, [2]);
  });
  it("returns [3] when given [1, 2, 3, 4, 5]", () => {
    const words = [1, 2, 3, 4, 5];
    const result = middle(words);
    assert.deepEqual(result, [3]);
  });
  it("returns [2, 3] when given [1, 2, 3, 4]", () => {
    const words = [1, 2, 3, 4];
    const result = middle(words);
    assert.deepEqual(result, [2, 3]);
  });
  it("returns [3, 4] when given [1, 2, 3, 4, 5, 6]", () => {
    const words = [1, 2, 3, 4, 5, 6];
    const result = middle(words);
    assert.deepEqual(result, [3, 4]);
  });
});