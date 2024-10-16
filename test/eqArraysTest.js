// IMPORT FUNCTIONS
const eqArrays = require("../eqArrays"); // Import the eqArrays function from the eqArrays.js module
const assertEqual = require("../assertEqual"); // Import the assertEqual function for testing

// Test code
// Test 1: Check if [1, 2, 3] and [1, 2, 3] are equal (expected true)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Expected output: Assertion Passed

// Test 2: Check if [1, 2, 3] and [3, 2, 1] are unequal (expected false)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Expected output: Assertion Passed

// Test 3: Check if ["1", "2", "3"] and ["1", "2", "3"] (string elements) are equal (expected true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Expected output: Assertion Passed

// Test 4: Check if ["1", "2", "3"] and ["1", "2", 3] (mixed string/number elements) are unequal (expected false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Expected output: Assertion Passed
