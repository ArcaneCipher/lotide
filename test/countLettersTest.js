// IMPORT FUNCTIONS
const assert = require("chai").assert;
const countLetters = require("../countLetters");

// TEST CASES
describe("#countLetters", () => {
  // Test Case 1: Simple string "LHL"
  it("should return { l: 2, h: 1 } for 'LHL'", () => {
    const result = countLetters("LHL");
    const expected = { l: 2, h: 1 };
    assert.deepEqual(result, expected);
  });

  // Test Case 2: Complex string "lighthouse in the house"
  it("should return correct letter counts for 'lighthouse in the house'", () => {
    const result = countLetters("lighthouse in the house");
    const expected = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    };
    assert.deepEqual(result, expected);
  });

  // Test Case 3: String with punctuation and numbers "Hello, World! 123"
  it("should return correct letter counts for 'Hello, World! 123'", () => {
    const result = countLetters("Hello, World! 123");
    const expected = { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 };
    assert.deepEqual(result, expected);
  });

  // Test Case 4: Long string "A quick brown fox jumps over the lazy dog"
  it("should return correct letter counts for 'A quick brown fox jumps over the lazy dog'", () => {
    const result = countLetters("A quick brown fox jumps over the lazy dog");
    const expected = {
      a: 2,
      b: 1,
      c: 1,
      d: 1,
      e: 2,
      f: 1,
      g: 1,
      h: 1,
      i: 1,
      j: 1,
      k: 1,
      l: 1,
      m: 1,
      n: 1,
      o: 4,
      p: 1,
      q: 1,
      r: 2,
      s: 1,
      t: 1,
      u: 2,
      v: 1,
      w: 1,
      x: 1,
      y: 1,
      z: 1,
    };
    assert.deepEqual(result, expected);
  });

  // Test Case 5: Empty string
  it("should return an empty object for an empty string", () => {
    const result = countLetters("");
    const expected = {};
    assert.deepEqual(result, expected);
  });
});
