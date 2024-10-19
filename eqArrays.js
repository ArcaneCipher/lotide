// EQARRAYS FUNCTION IMPLEMENTATION

/**
 * Compares two arrays for a perfect match (strict equality of elements and order).
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {boolean} - Returns true if both arrays are equal, false otherwise.
 */
const eqArrays = function (arr1, arr2) {
  // Check if arrays have different lengths; if so, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Use 'every' method to iterate through the arrays
  return arr1.every((element, i) => {
    // If both elements are arrays, compare them recursively
    if (Array.isArray(element) && Array.isArray(arr2[i])) {
      return eqArrays(element, arr2[i]); // Recursive call
    } else {
      // If elements are not arrays, compare them directly
      return element === arr2[i];
    }
  });
};


// EXPORT MODULE
// Exporting the eqArrays function for use in other files
module.exports = eqArrays;
