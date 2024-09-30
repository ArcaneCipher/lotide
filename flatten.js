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
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

// flatten function
function flatten(complexArray) {
  let flatArray = [];

  for (let i = 0; i < complexArray.length; i++) {
    if (Array.isArray(complexArray[i])) {
      // If the element is an array, concatenate its elements to the result
      flatArray = flatArray.concat(complexArray[i]);
    } else {
      // If the element is not an array, push it directly to the result
      flatArray.push(complexArray[i]);
    }
  }

  return flatArray; // Return the flattened array
}

// Test case for flatten
console.log(flatten([1, 2, [3, 4], 5, [6]])); // Expected output: [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, 3], 4]));         // Expected output: [1, 2, 3, 4]
console.log(flatten([[1, 2], 3, [4, 5]]));    // Expected output: [1, 2, 3, 4, 5]