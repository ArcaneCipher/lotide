// IMPORT FUNCTIONS
const assert = require("chai").assert;
const countOnly = require("../countOnly");

// TEST CASES
describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];

  // Test Case 1: Count "Jason", "Karima", and "Fang" from the list
  it("should return 1 for 'Jason', 2 for 'Fang', and undefined for 'Karima'", () => {
    const result = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
    });
    assert.strictEqual(result["Jason"], 1); // "Jason" should be counted once
    assert.strictEqual(result["Karima"], undefined); // "Karima" should not be in the list
    assert.strictEqual(result["Fang"], 2); // "Fang" should be counted twice
  });

  // Test Case 2: Count nothing
  it("should return an empty object when no items are specified to be counted", () => {
    const result = countOnly(firstNames, {});
    assert.deepEqual(result, {}); // No items specified to be counted
  });

  // Test Case 3: Exclude items not to be counted
  it("should not count items marked as false", () => {
    const result = countOnly(firstNames, { Jason: true, Agouhanna: false });
    assert.strictEqual(result["Jason"], 1); // "Jason" should be counted
    assert.strictEqual(result["Agouhanna"], undefined); // "Agouhanna" should not be counted
  });

  // Test Case 4: Empty array
  it("should return an empty object for an empty array", () => {
    const result = countOnly([], { Jason: true });
    assert.deepEqual(result, {}); // No items to count in an empty array
  });
});
