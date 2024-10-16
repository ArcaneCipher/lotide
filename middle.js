// MIDDLE FUNCTION IMPLEMENTATION

/**
 * Returns the middle element(s) of an array. 
 * If the array has an odd number of elements, returns the middle element. 
 * If the array has an even number of elements, returns the middle two elements.
 * Arrays with 2 or fewer elements return an empty array.
 * @param {Array} arr - The input array.
 * @returns {Array} - The middle element(s) of the array.
 */
const middle = function (arr) {
  let result = []; // Initialize an empty array for the result
  let middle = Math.floor(arr.length / 2); // Calculate the middle index

  // Handle edge case: arrays with 2 or fewer elements return an empty array
  if (arr.length <= 2) {
    return result;
  }

  // If the array has an even length, return the two middle elements
  if (arr.length % 2 === 0) {
    result.push(arr[middle - 1]); // Push the element before the middle index
    result.push(arr[middle]); // Push the middle element
  } 
  // If the array has an odd length, return the single middle element
  else {
    result.push(arr[middle]); // Push the middle element
  }

  return result;
}

// EXPORT MODULE
// Exporting the middle function for use in other files
module.exports = middle;
