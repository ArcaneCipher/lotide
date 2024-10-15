// TAIL FUNCTION IMPLEMENTATION

/**
 * Returns the last element of an array.
 * @param {Array} array - The array from which to retrieve all but the first element.
 * @returns {*} The last element(s) of the array, or undefined if the array is empty.
 */
const tail = function (array) {
  return array.slice(1); // Return all but the first element of the array
}

// EXPORT MODULE
// Exporting the tal function for use in other files
module.exports = tail;
