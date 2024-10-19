// IMPORT FUNCTIONS
const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

// TEST CASES
describe("#assertEqual", () => {

  // Test Case 1: Identical strings should return true
  it("should return true when comparing 'string' and 'string'", () => {
    assert.isTrue(assertEqual("string", "string"));
  });

  // Test Case 2: Different strings should return false
  it("should return false when comparing 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  // Test Case 3: Identical numbers should return true
  it("should return true when comparing 1 and 1", () => {
    assert.isTrue(assertEqual(1, 1));
  });

  // Test Case 4: Different numbers should return false
  it("should return false when comparing 1 and 3", () => {
    assert.isFalse(assertEqual(1, 3));
  });

});
