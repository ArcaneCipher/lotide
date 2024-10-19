// IMPORT FUNCTIONS
const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

// TEST CASES FOR findKeyByValue FUNCTION
describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };

  // Test Case 1: Find key by value ("The Wire")
  it("should return 'drama' when looking for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  // Test Case 2: Find key by value ("Brooklyn Nine-Nine")
  it("should return 'comedy' when looking for 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  // Test Case 3: No key with value "That '70s Show" (should return undefined)
  it("should return undefined when looking for 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  // Test Case 4: Non-existent value in an empty object (should return undefined)
  it("should return undefined when looking for any value in an empty object", () => {
    assert.strictEqual(findKeyByValue({}, "The Wire"), undefined);
  });

});
