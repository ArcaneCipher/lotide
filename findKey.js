/**
 * Finds the first key in an object where the callback function returns true for the value.
 * @param {Object} object - The object to search through.
 * @param {Function} valueToFind - The callback function to determine the key to find.
 * @returns {string|undefined} - Returns the key if found, or undefined if no match is found.
 */
const findKey = function (object, valueToFind) {
  // Loop over the keys of the object
  for (const key in object) {
    // If the callback returns true for the value of the current key, return the key
    if (valueToFind(object[key])) {
      return key;
    }
  }
  // If no key matches, return undefined
  return undefined;
};

// EXPORT MODULE
module.exports = findKey;
