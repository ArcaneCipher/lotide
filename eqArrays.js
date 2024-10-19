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

  // Iterate through each element of the arrays and compare
  for (let i = 0; i < arr1.length; i++) {
    // If both elements are arrays, compare them recursively
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // Return false if the recursive comparison returns false
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else {
      // Return false if any corresponding elements are not strictly equal
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }

  // If no mismatches are found, return true
  return true;
};


// EXPORT MODULE
// Exporting the eqArrays function for use in other files
module.exports = eqArrays;
