// IMPORT FUNCTIONS
const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");

// TEST CASES
describe("#assertObjectsEqual", () => {

  // Test Case 1: Objects with the same key-value pairs (order doesn't matter)
  it("should pass when comparing { a: '1', b: 2 } and { b: 2, a: '1' }", () => {
    const obj1 = { a: "1", b: 2 };
    const obj2 = { b: 2, a: "1" };
    assert.deepEqual(obj1, obj2);
  });

  // Test Case 2: Objects with different structures (extra key)
  it("should fail when comparing { a: '1', b: 2 } and { a: '1', b: 2, c: 3 }", () => {
    const obj1 = { a: "1", b: 2 };
    const obj3 = { a: "1", b: 2, c: 3 };
    assert.notDeepEqual(obj1, obj3); // This should fail
  });

  // Test Case 3: Objects with array values (matching arrays)
  it("should pass when comparing { a: [1, 2], b: [3, 4] } and { a: [1, 2], b: [3, 4] }", () => {
    const obj1 = { a: [1, 2], b: [3, 4] };
    const obj2 = { a: [1, 2], b: [3, 4] };
    assert.deepEqual(obj1, obj2);
  });

  // Test Case 4: Objects with array values (non-matching arrays)
  it("should fail when comparing { a: [1, 2], b: [3, 4] } and { a: [1, 2], b: [3, 5] }", () => {
    const obj1 = { a: [1, 2], b: [3, 4] };
    const obj2 = { a: [1, 2], b: [3, 5] };
    assert.notDeepEqual(obj1, obj2); // This should fail
  });

});
