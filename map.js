// MAP FUNCTION IMPLEMENTATION

/**
 * Takes an array and a callback function, applies the callback to each item
 * in the array, and returns a new array with the results.
 * @param {Array} array - The array to map over.
 * @param {function} callback - The function to apply to each item in the array.
 * @returns {Array} - A new array with the results of applying the callback.
 */
const map = function (array, callback) {
  const results = []; // Initialize an empty array to hold the results
  for (let item of array) {
    results.push(callback(item)); // Apply the callback and push the result
  }
  return results; // Return the new array
};

// EXPORT MODULE
// Exporting the map function for use in other files
module.exports = map;
