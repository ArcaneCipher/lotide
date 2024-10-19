// IMPORT FUNCTIONS
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

// TEST CASES
describe("#eqArrays", () => {

  // Test Case 1: Arrays with matching elements (numbers)
  it("should return true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  // Test Case 2: Arrays with different order of elements
  it("should return false for [1, 2, 3] and [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  // Test Case 3: Arrays with matching elements (strings)
  it("should return true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  // Test Case 4: Arrays with mixed types (strings vs numbers)
  it("should return false for ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  // Test Case 5: Matching nested arrays (deep arrays)
  it("should return true for [[2, 3], [4]], [[2, 3], [4]] and [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

   // Test Case 5: Non-matching nested arrays (deep arrays)
   it("should return false for [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

    // Test Case 5: Non-matching nested arrays (deep arrays)
    it("should return false for [[2, 3], [4]] and [[2, 3], 4]", () => {
      assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
    });

});
