// WITHOUT FUNCTION IMPLEMENTATION

/**
 * Returns a new array that excludes specific unwanted elements from the source array.
 * @param {Array} source - The array to filter.
 * @param {Array} itemsToRemove - The array of items to exclude from the source array.
 * @returns {Array} - A new array with unwanted elements removed.
 */
const without = function (source, itemsToRemove) {
  const result = []; // Initialize an empty array to hold the results

  // Loop through the source array
  for (let i = 0; i < source.length; i++) {
    // If the current element is NOT in the itemsToRemove array, add it to the result
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }

  return result; // Return the new array with the unwanted elements removed
};

// EXPORT MODULE
// Exporting the without function for use in other files
module.exports = without;
