const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Test Case 1: Extracting the first letter of each word
const test1 = map(words, (word) => word[0]);
assertArraysEqual(test1, ["g", "c", "t", "m", "t"]); // Expected output: ✅✅✅ Assertion Passed

// Test Case 2: Converting each word to uppercase
const test2 = map(words, (word) => word.toUpperCase());
assertArraysEqual(test2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]); // Expected output: ✅✅✅ Assertion Passed

// Test Case 3: Getting the length of each word
const test3 = map(words, (word) => word.length);
assertArraysEqual(test3, [6, 7, 2, 5, 3]); // Expected output: ✅✅✅ Assertion Passed

// Test Case 4: Mapping over an empty array
const test4 = map([], (word) => word[0]);
assertArraysEqual(test4, []); // Expected output: ✅✅✅ Assertion Passed

// Test Case 5: Using a different array
const numbers = [1, 2, 3, 4, 5];
const test5 = map(numbers, (num) => num * 2);
assertArraysEqual(test5, [2, 4, 6, 8, 10]); // Expected output: ✅✅✅ Assertion Passed