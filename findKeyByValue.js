/**
 * Finds the first key in an object that matches the specified value.
 * @param {Object} object - The object to search through.
 * @param {*} valueToFind - The value to search for in the object.
 * @returns {string|undefined} - Returns the key if found, or undefined if no match is found.
 */
const findKeyByValue = function (object, valueToFind) {
  // Loop through the keys of the object
  for (const key of Object.keys(object)) {
    // If the value matches the current key's value, return the key
    if (object[key] === valueToFind) {
      return key;
    }
  }
  // If no key matches, return undefined
  return undefined;
};

// EXPORT MODULE
module.exports = findKeyByValue;
