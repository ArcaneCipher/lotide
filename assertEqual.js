/**
 * Compares two values and returns true if they are strictly equal, false otherwise.
 * @param {*} actual - The actual value to compare.
 * @param {*} expected - The expected value to compare against.
 * @returns {boolean} - Returns true if the values are equal, false otherwise.
 */
const assertEqual = function (actual, expected) {
  return actual === expected; // Simply return the result of strict equality comparison
};

// EXPORT MODULE
module.exports = assertEqual;
