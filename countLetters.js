/**
 * Takes a string and returns an object containing the counts of each letter in the string.
 * Non-alphabetical characters are ignored, and the count is case-insensitive.
 * @param {string} string - The input string to count letters from.
 * @returns {Object} - An object where keys are letters, and values are their counts.
 */
const countLetters = function (string) {
  const results = {}; // Initialize results object
  const cleanString = string.replace(/[^a-zA-Z]/g, ""); // Remove non-alphabetic characters
  const lowerCase = cleanString.toLowerCase(); // Convert to lowercase to make it case-insensitive
  const charArray = lowerCase.split(""); // Convert the string to an array of characters

  // Loop through each character and count occurrences
  for (const char of charArray) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results; // Return the object with letter counts
};

// EXPORT MODULE
module.exports = countLetters;
