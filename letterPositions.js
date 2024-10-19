// LETTER POSITIONS FUNCTION IMPLEMENTATION

/**
 * Returns an object where each key is a character from the input sentence,
 * and the value is an array containing all the positions (indices) where that character appears.
 * @param {string} sentence - The sentence to analyze.
 * @returns {Object} - An object with characters as keys and arrays of indices as values.
 */
const letterPositions = function (sentence) {
  const results = {}; // Object to store character positions

  // Loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Ignore spaces
    if (char !== ' ') {
      // If the character is already in results, push the index to its array
      if (results[char]) {
        results[char].push(i);
      } else {
        // If the character is not yet in results, create a new array with the index
        results[char] = [i];
      }
    }
  }

  return results;
};

// EXPORT MODULE
// Exporting the letterPositions function for use in other files
module.exports = letterPositions;
