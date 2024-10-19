/**
 * Counts specified items from an array, based on the itemsToCount object.
 * @param {Array} allItems - An array of strings to count from.
 * @param {Object} itemsToCount - An object specifying which items to count.
 * @returns {Object} - An object where the keys are the items and the values are their counts.
 */
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1; 
      } else {
        results[item] = 1; 
      }
    }
  }

  return results;
};

// EXPORT MODULE
module.exports = countOnly;
