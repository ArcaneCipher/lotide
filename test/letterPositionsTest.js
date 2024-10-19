// IMPORT FUNCTIONS
const assert = require("chai").assert; 
const letterPositions = require("../letterPositions"); 

// TEST CASES FOR letterPositions FUNCTION
describe("#letterPositions", () => {
  
  // Test 1: Basic test with the word "hello"
  it("returns correct positions for the word 'hello'", () => {
    const result = letterPositions("hello");
    assert.deepEqual(result['h'], [0]); // 'h' is at index 0
    assert.deepEqual(result['e'], [1]); // 'e' is at index 1
    assert.deepEqual(result['l'], [2, 3]); // 'l' appears at indices 2 and 3
    assert.deepEqual(result['o'], [4]); // 'o' is at index 4
  });

  // Test 2: Complex test with "lighthouse in the house"
  it("returns correct positions for the phrase 'lighthouse in the house'", () => {
    const result = letterPositions("lighthouse in the house");
    assert.deepEqual(result['l'], [0]);
    assert.deepEqual(result['i'], [1, 11]);
    assert.deepEqual(result['g'], [2]);
    assert.deepEqual(result['h'], [3, 5, 15, 18]);
    assert.deepEqual(result['t'], [4, 14]);
    assert.deepEqual(result['o'], [6, 19]);
    assert.deepEqual(result['u'], [7, 20]);
    assert.deepEqual(result['s'], [8, 21]);
    assert.deepEqual(result['e'], [9, 16, 22]);
    assert.deepEqual(result['n'], [12]);
  });

  // Test 3: Edge case - string with repeated characters "aaa"
  it("returns correct positions for the string 'aaa'", () => {
    const result = letterPositions("aaa");
    assert.deepEqual(result['a'], [0, 1, 2]); // 'a' appears at indices 0, 1, and 2
  });

  // Test 4: Edge case - empty string
  it("returns an empty object for an empty string", () => {
    const result = letterPositions("");
    assert.deepEqual(result, {}); // No letters in an empty string, expect empty object
  });

});
