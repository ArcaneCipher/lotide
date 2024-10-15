// IMPORT ASSERT EQUAL FUNCTION
const assertEqual = require("./assertEqual"); // Importing assertEqual from the assertEqual module

// HEAD FUNCTION IMPLEMENTATION

/**
 * Returns the first element of an array.
 * @param {Array} array - The array from which to retrieve the first element.
 * @returns {*} The first element of the array, or undefined if the array is empty.
 */
const head = function (array) {
  return array[0]; // Return the first element of the array
};

// EXPORT MODULE
// Exporting the head function for use in other files
module.exports = head;
