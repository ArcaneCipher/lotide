// IMPORT DEPENDENCIES
const eqArrays = require("./eqArrays"); // Assuming eqArrays is already modularized
const isObject = require("./isObject"); // Assuming isObject is already modularized

/**
 * Compares two objects to check if they are equal.
 * @param {Object} object1 - The first object to compare.
 * @param {Object} object2 - The second object to compare.
 * @returns {boolean} - Returns true if the objects are equal, false otherwise.
 */
const eqObjects = function (object1, object2) {
  // Check if both objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Iterate over each key in the first object
  for (const key of Object.keys(object1)) {
    const value1 = object1[key];
    const value2 = object2[key];

    // If values are arrays, use eqArrays to compare them
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false; // Arrays are not equal
      }
    }
    // Check if both values are objects (but not arrays)
    else if (isObject(value1) && isObject(value2)) {
      if (!eqObjects(value1, value2)) {
        return false; // Objects are not equal
      }
    }
    // For non-array values, non-object values, compare with strict equality
    else if (value1 !== value2) {
      return false; // Primitive values do not match
    }
  }

  return true; // Objects are equal
};

// EXPORT MODULE
// Exporting the eqObjects function for use in other files
module.exports = eqObjects;
