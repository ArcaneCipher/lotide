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

function middle(arr) {
  let result = [];
  let middle = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return result;
  }

  if (arr.length % 2 === 0) {
    result.push(arr[middle - 1]);
    result.push(arr[middle]);
  } else {
    result.push(arr[middle]);
  }

  return result;
}

// Test cases
assertArraysEqual((middle([1, 2])),[]);
assertArraysEqual((middle([1])),[]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3, 4]);
assertArraysEqual((middle([1, 2, 3, 4, 5])),[3]);