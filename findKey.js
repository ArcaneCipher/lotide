const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
}

// EXPORT MODULE
// Exporting the findKey function for use in other files
module.exports = findKey;

// Test cases
const restaurants = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

// Test case 1: Find the first key with 2 stars
assertEqual(findKey(restaurants, x => x.stars === 2), "noma");

// Test case 2: Find the first key with 3 stars
assertEqual(findKey(restaurants, x => x.stars === 3), "Akaleri");

// Test case 3: No key with 5 stars (should return undefined)
assertEqual(findKey(restaurants, x => x.stars === 5), undefined);

// Test case 4: Find the first key with 1 star
assertEqual(findKey(restaurants, x => x.stars === 1), "Blue Hill");