// IMPORT FUNCTIONS
const assertArraysEqual = require("../assertArraysEqual"); // Import the assertArraysEqual function for testing arrays
const middle = require("../middle"); // Import the middle function to test

// TEST CASES

// Test 1: Edge case - array with 2 elements should return an empty array
assertArraysEqual(middle([1, 2]), []); // Expected output: Assertion Passed

// Test 2: Edge case - array with 1 element should return an empty array
assertArraysEqual(middle([1]), []); // Expected output: Assertion Passed

// Test 3: Array with even number of elements (6 elements) should return the middle two elements
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Expected output: Assertion Passed

// Test 4: Array with odd number of elements (5 elements) should return the single middle element
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Expected output: Assertion Passed

// Test 5: Edge case - empty array should return an empty array
assertArraysEqual(middle([]), []); // Expected output: Assertion Passed
