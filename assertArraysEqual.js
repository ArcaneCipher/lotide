// IMPORT FUNCTIONS
const eqArrays = require("./eqArrays"); // Import the eqArrays function for array comparison

/**
 * Compares two arrays and logs an appropriate message based on their equality.
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 */
const assertArraysEqual = function (arr1, arr2) {
  // Check if the arrays are equal using eqArrays function
  if (eqArrays(arr1, arr2)) {
    // Log a success message if arrays are equal
    console.log(`✅✅✅ Assertion Passed:`, arr1, "===", arr2);
  } else {
    // Log a failure message if arrays are not equal
    console.log(`🛑🛑🛑 Assertion Failed:`, arr1, "!==", arr2);
  }
};

// EXPORT MODULE
// Exporting the assertArraysEqual function for use in other files
module.exports = assertArraysEqual;
