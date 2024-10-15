// IMPORT FUNCTIONS
const head = require('../head'); // Import the head function from the head.js module
const assertEqual = require('../assertEqual'); // Import the assertEqual function for testing

// TEST CODE

// Test 1: Check if the first element of [5, 6, 7] is 5
assertEqual(head([5, 6, 7]), 5); // Expected output: Assertion Passed

// Test 2: Check if the first element of ["Hello", "Lighthouse", "Labs"] is "Hello"
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Expected output: Assertion Passed

// Test 3: Check for edge case: empty array returns undefined
assertEqual(head([]), undefined); // Expected output: Assertion Passed (undefined is expected)
