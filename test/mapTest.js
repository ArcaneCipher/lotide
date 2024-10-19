// IMPORT FUNCTIONS
const { assert } = require("chai");
const map = require("../map");

// TEST CASES FOR map FUNCTION
describe("#map", () => {
  
  // Test Case 1: Extracting the first letter of each word
  it("returns ['g', 'c', 't', 'm', 't'] when extracting the first letter of each word in ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, (word) => word[0]);
    assert.deepEqual(result, ["g", "c", "t", "m", "t"]);
  });

  // Test Case 2: Converting each word to uppercase
  it("returns ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'] when converting each word to uppercase", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, (word) => word.toUpperCase());
    assert.deepEqual(result, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });

  // Test Case 3: Getting the length of each word
  it("returns [6, 7, 2, 5, 3] when getting the length of each word in ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, (word) => word.length);
    assert.deepEqual(result, [6, 7, 2, 5, 3]);
  });

  // Test Case 4: Mapping over an empty array
  it("returns [] when mapping over an empty array", () => {
    const result = map([], (word) => word[0]);
    assert.deepEqual(result, []);
  });

  // Test Case 5: Using a different array (numbers)
  it("returns [2, 4, 6, 8, 10] when mapping over [1, 2, 3, 4, 5] and multiplying each element by 2", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = map(numbers, (num) => num * 2);
    assert.deepEqual(result, [2, 4, 6, 8, 10]);
  });

});
