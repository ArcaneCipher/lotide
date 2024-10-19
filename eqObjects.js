// IMPORT DEPENDENCIES
const eqArrays = require("./eqArrays"); // Assuming eqArrays is already modularized

/**
 * Compares two objects to check if they are equal.
 * @param {Object} object1 - The first object to compare.
 * @param {Object} object2 - The second object to compare.
 * @returns {boolean} - Returns true if the objects are equal, false otherwise.
 */
const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  // Check if both objects have the same number of keys
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // Iterate over each key in the first object
  for (const key of obj1Keys) {
    const value1 = object1[key];
    const value2 = object2[key];

    // If values are arrays, use eqArrays to compare them
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false; // Arrays are not equal
      }
    } else {
      // For non-array values, compare with strict equality
      if (value1 !== value2) {
        return false; // Values do not match
      }
    }
  }

  return true; // Objects are equal
};

// EXPORT MODULE
// Exporting the eqObjects function for use in other files
module.exports = eqObjects;
