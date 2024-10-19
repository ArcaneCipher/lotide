// IMPORT FUNCTIONS
const assert = require("chai").assert;
const flatten = require("../flatten");

// TEST CASES
describe("#flatten", () => {

  // Test Case 1: Simple nested arrays
  it("should return [1, 2, 3, 4, 5, 6] when flattening [1, 2, [3, 4], 5, [6]]", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(result, expected);
  });

  // Test Case 2: Mixed arrays
  it("should return [1, 2, 3, 4] when flattening [1, [2, 3], 4]", () => {
    const result = flatten([1, [2, 3], 4]);
    const expected = [1, 2, 3, 4];
    assert.deepEqual(result, expected);
  });

  // Test Case 3: Arrays with nested arrays of varying lengths
  it("should return [1, 2, 3, 4, 5] when flattening [[1, 2], 3, [4, 5]]", () => {
    const result = flatten([[1, 2], 3, [4, 5]]);
    const expected = [1, 2, 3, 4, 5];
    assert.deepEqual(result, expected);
  });

  // Test Case 4: No nested arrays
  it("should return [1, 2, 3, 4] when flattening [1, 2, 3, 4]", () => {
    const result = flatten([1, 2, 3, 4]);
    const expected = [1, 2, 3, 4];
    assert.deepEqual(result, expected);
  });

  // Test Case 5: Empty array
  it("should return an empty array when flattening an empty array", () => {
    const result = flatten([]);
    const expected = [];
    assert.deepEqual(result, expected);
  });

});
