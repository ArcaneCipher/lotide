// eqArrays function for comparing arrays
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // Arrays are not the same length, so they can't be equal
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Found a mismatch, return false
    }
  }
  return true; // All elements match
}

// assertArraysEqual function
function assertArraysEqual (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

// without function to remove unwanted elements from source array
function without(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    // Check if the current element is NOT in the itemsToRemove array using includes() method
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]); // If the current element is not in itemsToRemove, push it to the result array
    }
  }
  return result;
}

// Test cases for the without function
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Should pass
assertArraysEqual(without([1, 2, 3], [4, 5]), [1, 2, 3]); // Should pass (no items removed)
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 3]), [1, 4, 5]); // Should pass
assertArraysEqual(without(["apple", "banana", "cherry"], ["banana"]), ["apple", "cherry"]); // Should pass

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);