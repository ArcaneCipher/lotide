// IMPORT FUNCTIONS
const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  // Test case 1: Ensure we return length 2 for an array with three elements
  it("returns length 2 for 3 element array", () => {
    assert.deepEqual(tail(["elm0", "elm1", "elm2"]).length, 2);
  });

  // Test case 2: Ensure we return the last two elements of an array with three elements
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  // Test case 3: An array with only one element should yield an empty array for its tail
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  // Test case 4: An empty array should yield an empty array for its tail
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  //Test case 5: make sure the original array was not altered by the tail function
  it("make sure the original array was not altered by the tail function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = tail(words);
    assert.deepEqual(result, ["world", "lighthouse"]);
    assert.strictEqual(words.length, 3);
  });

});