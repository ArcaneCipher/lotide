// TAKEUNTIL FUNCTION IMPLEMENTATION

/**
 * Returns a slice of the array with elements taken from the beginning 
 * until the callback function returns a truthy value.
 * @param {Array} array - The array to process.
 * @param {function} callback - The function that determines when to stop taking elements.
 * @returns {Array} - A new array with the elements up to the point where the callback returns true.
 */
const takeUntil = function (array, callback) {
  const result = []; // Initialize an empty array to hold the results

  // Loop through the array until the callback returns true
  for (let item of array) {
    if (callback(item)) {
      break; // Stop processing if the callback condition is met
    }
    result.push(item); // Add the item to the result if callback condition is not met
  }
  
  return result; // Return the final array
};

// EXPORT MODULE
// Exporting the takeUntil function for use in other files
module.exports = takeUntil;
