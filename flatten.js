/**
 * Flattens a nested array into a single-level array.
 * @param {Array} complexArray - The array to flatten.
 * @returns {Array} - Returns a new array with all nested arrays flattened.
 */
const flatten = function (complexArray) {
  let flatArray = [];

  // Loop through each element in the complexArray
  for (let i = 0; i < complexArray.length; i++) {
    // If the element is an array, push its elements to flatArray
    if (Array.isArray(complexArray[i])) {
      flatArray.push(...complexArray[i]);
    } else {
      // If it's not an array, push it directly to flatArray
      flatArray.push(complexArray[i]);
    }
  }

  return flatArray; // Return the flattened array
};

// EXPORT MODULE
module.exports = flatten;
