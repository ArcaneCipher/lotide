// IMPORT FUNCTIONS
const assert = require("chai").assert;
const findKey = require("../findKey");

// TEST CASES
describe("#findKey", () => {

  const restaurants = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 },
  };

  // Test Case 1: Find the first key with 2 stars
  it("should return 'noma' when searching for the first key with 2 stars", () => {
    assert.strictEqual(findKey(restaurants, x => x.stars === 2), "noma");
  });

  // Test Case 2: Find the first key with 3 stars
  it("should return 'Akaleri' when searching for the first key with 3 stars", () => {
    assert.strictEqual(findKey(restaurants, x => x.stars === 3), "Akaleri");
  });

  // Test Case 3: No key with 5 stars (should return undefined)
  it("should return undefined when searching for a key with 5 stars", () => {
    assert.strictEqual(findKey(restaurants, x => x.stars === 5), undefined);
  });

  // Test Case 4: Find the first key with 1 star
  it("should return 'Blue Hill' when searching for the first key with 1 star", () => {
    assert.strictEqual(findKey(restaurants, x => x.stars === 1), "Blue Hill");
  });

});
