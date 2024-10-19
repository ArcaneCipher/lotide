// ISOBJECT FUNCTION IMPLEMENTATION

/**
 * Function taken from Basedash article: https://www.basedash.com/blog/understanding-isobject-in-javascript
 * Evaluates a value to check if is strictly an object. Will exclude null, Arrays, and Functions as "objects"
 * @param {Object} value - The value to evaluate.
 * @returns {boolean} - Returns true if value is strictly an object, false otherwise.
 */
const isObject = function (value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value !== 'function';
};


// EXPORT MODULE
// Exporting the isObject function for use in other files
module.exports = isObject;