// IMPORT FUNCTIONS
const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

// TEST CASES FOR assertArraysEqual FUNCTION
describe("#assertArraysEqual", () => {

  // Test Case 1: Arrays with matching elements (numbers)
  it("should return true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  // Test Case 2: Arrays with different order of elements
  it("should return false for [1, 2, 3] and [3, 2, 1]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });

  // Test Case 3: Arrays with matching elements (strings)
  it("should return true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.isTrue(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });

  // Test Case 4: Arrays with mixed types (strings vs numbers)
  it("should return false for ['1', '2', '3'] and [1, 2, 3]", () => {
    assert.isFalse(assertArraysEqual(["1", "2", "3"], [1, 2, 3]));
  });

});
