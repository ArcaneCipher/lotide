// IMPORT FUNCTIONS
const assert = require("chai").assert;
const middle = require("../middle");

// TEST CASES
describe("#middle", () => {
  // Test 1: Edge case - array with 2 elements should return an empty array
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  // Test 2: Edge case - array with 1 element should return an empty array
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  // Test 3: Array with even number of elements (6 elements) should return the middle two elements
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  // Test 4: Array with odd number of elements (5 elements) should return the single middle element
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  // Test 5: Edge case - empty array should return an empty array
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});
