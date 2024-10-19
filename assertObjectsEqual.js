// IMPORT FUNCTIONS
const eqObjects = require("./eqObjects"); // Import eqObjects function from its module
const inspect = require("util").inspect; // Utility for inspecting object logs

/**
 * Logs a message to the console based on whether two objects are equal.
 * @param {Object} actual - The first object to compare.
 * @param {Object} expected - The second object to compare.
 */
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// EXPORT MODULE
// Exporting the assertObjectsEqual function for use in other files
module.exports = assertObjectsEqual;
