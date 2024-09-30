function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(string) {
  const results = {}; // Initialize results object
  const cleanString = string.replace(/[^a-zA-Z]/g, '') // Clean string by removing any character that aren't a-z and A-Z
  const lowerCase = cleanString.toLowerCase() // Optional: to make string case-insensitive
  const charArray = lowerCase.split('').sort(); // Optional: convert to array and sort so results is in alphabetical order

  for (const char of charArray) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results;
}

// Test case
const test1 = countLetters("LHL");
const test2 = countLetters("lighthouse in the house");
const test3 = countLetters("Hello, World! 123");
const test4 = countLetters("A quick brown fox jumps over the lazy dog");
const test5 = countLetters("");

console.log(test1);
assertEqual(test1, { h: 1, l: 2 });
console.log(test2);
assertEqual(test2, { e: 3, g: 1, h: 4, i: 2, l: 1, n: 1, o: 2, s: 2, t: 2, u: 2 });
console.log(test3);
assertEqual(test3, { d: 1, e: 1, h: 1, l: 3, o: 2, r: 1, w: 1 });
console.log(test4);
assertEqual(test4, { a: 2, b: 1, c: 1, d: 1, e: 2, f: 1, g: 1, h: 1, i: 1, j: 1, k: 1, l: 1, m: 1, n: 1, o: 4, p: 1, q: 1, r: 2, s: 1, t: 1, u: 2, v: 1, w: 1, x: 1, y: 1, z: 1});
console.log(test5);
assertEqual(test5, {}); // Empty string should return an empty object