// IMPORT FUNCTIONS
const assert = require("chai").assert;
const head = require("../head");

// TEST CASES
describe("#head", () => {
  // Test 1: Check if the first element of [1, 2, 3] is 1
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  // Test 2: Check if the first element of ["5"] is "5"
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });

  // Test 3: Check if the first element of [5, 6, 7] is 5
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  // Test 4: Check if the first element of ["Hello", "Lighthouse", "Labs"] is "Hello"
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  // Test 5: Check for edge case: empty array returns undefined
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});
