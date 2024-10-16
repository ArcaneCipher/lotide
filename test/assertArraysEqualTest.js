// IMPORT FUNCTIONS
const assertArraysEqual = require("../assertArraysEqual"); // Import the assertArraysEqual function for testing

// TEST CASES

// Test 1: Check if [1, 2, 3] is equal to [1, 2, 3] (should pass)
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Expected output: Assertion Passed

// Test 2: Check if [1, 2, 3] is equal to [3, 2, 1] (should fail)
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Expected output: Assertion Failed

// Test 3: Check if ["1", "2", "3"] is equal to ["1", "2", "3"] (should pass)
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Expected output: Assertion Passed

// Test 4: Check if ["1", "2", "3"] is equal to [1, 2, 3] (should fail due to string vs number comparison)
assertArraysEqual(["1", "2", "3"], [1, 2, 3]); // Expected output: Assertion Failed
