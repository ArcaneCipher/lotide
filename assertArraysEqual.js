// IMPORT FUNCTIONS
const eqArrays = require("./eqArrays"); // Import the eqArrays function for array comparison

/**
 * Compares two arrays and returns true if they are equal, false otherwise.
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {boolean} - Returns true if the arrays are equal, otherwise false.
 */
const assertArraysEqual = function (arr1, arr2) {
  return eqArrays(arr1, arr2); // Return true or false based on array equality
};

// EXPORT MODULE
// Exporting the assertArraysEqual function for use in other files
module.exports = assertArraysEqual;
