// IMPORT FUNCTIONS
const assert = require("chai").assert; // Import Chai's assert function for testing
const without = require("../without"); // Import the without function for testing

// TEST CASES FOR without FUNCTION
describe("#without", () => {

  // Test Case 1: Removing one number from an array of numbers
  it("returns [2, 3] when removing [1] from [1, 2, 3]", () => {
    const result = without([1, 2, 3], [1]);
    assert.deepEqual(result, [2, 3]);
  });

  // Test Case 2: Removing numbers from a string array (with mixed types in itemsToRemove)
  it("returns ['1', '2'] when removing [1, 2, '3'] from ['1', '2', '3']", () => {
    const result = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(result, ["1", "2"]);
  });

  // Test Case 3: Removing non-existent elements (no changes should occur)
  it("returns [1, 2, 3] when removing [4, 5] from [1, 2, 3]", () => {
    const result = without([1, 2, 3], [4, 5]);
    assert.deepEqual(result, [1, 2, 3]);
  });

  // Test Case 4: Removing multiple elements from a longer array
  it("returns [1, 4, 5] when removing [2, 3] from [1, 2, 3, 4, 5]", () => {
    const result = without([1, 2, 3, 4, 5], [2, 3]);
    assert.deepEqual(result, [1, 4, 5]);
  });

  // Test Case 5: Removing one string from an array of strings
  it("returns ['apple', 'cherry'] when removing ['banana'] from ['apple', 'banana', 'cherry']", () => {
    const result = without(["apple", "banana", "cherry"], ["banana"]);
    assert.deepEqual(result, ["apple", "cherry"]);
  });

  // Test Case 6: Ensuring the original array is not modified
  it("does not modify the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); // Perform the without operation
    assert.deepEqual(words, ["hello", "world", "lighthouse"]); // The original array should remain unchanged
  });

});
