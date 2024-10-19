// IMPORT FUNCTIONS
const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

// TEST CASES
describe("#eqObjects", () => {

  // Test Case 1: Objects with same key-value pairs in different orders
  it("returns true for { color: 'red', size: 'medium' } and { size: 'medium', color: 'red' }", () => {
    const obj1 = { color: "red", size: "medium" };
    const obj2 = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  // Test Case 2: Objects with different keys or values (should return false)
  it("returns false for { color: 'red', size: 'medium' } and { color: 'red', size: 'medium', sleeveLength: 'long' }", () => {
    const obj1 = { color: "red", size: "medium" };
    const obj2 = { color: "red", size: "medium", sleeveLength: "long" };
    assert.isFalse(eqObjects(obj1, obj2));
  });

  // Test Case 3: Objects with arrays as values (should return true)
  it("returns true for { colors: ['red', 'blue'], size: 'medium' } and { size: 'medium', colors: ['red', 'blue'] }", () => {
    const obj1 = { colors: ["red", "blue"], size: "medium" };
    const obj2 = { size: "medium", colors: ["red", "blue"] };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  // Test Case 4: Objects with arrays as values but different content (should return false)
  it("returns false for { colors: ['red', 'blue'], size: 'medium' } and { colors: ['red', 'blue', 'green'], size: 'medium' }", () => {
    const obj1 = { colors: ["red", "blue"], size: "medium" };
    const obj2 = { colors: ["red", "blue", "green"], size: "medium" };
    assert.isFalse(eqObjects(obj1, obj2));
  });

});
