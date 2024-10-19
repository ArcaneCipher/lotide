// IMPORT FUNCTIONS
const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

// TEST CASES
describe("#takeUntil", () => {

  // Test Case 1: Taking elements until a negative number is encountered
  it("returns [1, 2, 5, 7, 2] when taking elements until a number less than 0 from [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data1, x => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });

  // Test Case 2: Taking elements until a comma is encountered
  it("returns ['I\'ve', 'been', 'to', 'Hollywood'] when taking elements until a comma from ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood']", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(data2, x => x === ',');
    assert.deepEqual(result, ["I've", "been", "to", "Hollywood"]); 
  });

  // Test Case 3: Edge case - empty array should return an empty array
  it("returns [] when passed an empty array", () => {
    const result = takeUntil([], x => x < 0);
    assert.deepEqual(result, []);
  });

  // Test Case 4: No elements meet the condition, should return the whole array
  it("returns [1, 2, 3, 4, 5] when no elements meet the condition (x > 10) in [1, 2, 3, 4, 5]", () => {
    const data3 = [1, 2, 3, 4, 5];
    const result = takeUntil(data3, x => x > 10);
    assert.deepEqual(result, [1, 2, 3, 4, 5]);
  });

});
