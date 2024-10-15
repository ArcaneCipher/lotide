// FUNCTION IMPLEMENTATION

/**
 * Compares two values and prints a message indicating if they are strictly equal.
 * @param {*} actual - The actual value to compare.
 * @param {*} expected - The expected value to compare against.
 */
const assertEqual = function (actual, expected) {
  // Check if both values are strictly equal (===)
  if (actual === expected) {
    // Log a success message if they are equal
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // Log a failure message if they are not equal
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// EXPORT MODULE
// This allows assertEqual to be imported and used in other files
module.exports = assertEqual;
