// IMPORT FUNCTION
// Import the assertEqual function from the assertEqual.js module
const assertEqual = require('../assertEqual');

// TEST CODE

// Test 1: Check if two identical strings are considered equal
assertEqual("string", "string"); // Expected output: Assertion Passed

// Test 2: Check if two different strings are considered unequal
assertEqual("Lighthouse Labs", "Bootcamp"); // Expected output: Assertion Failed

// Test 3: Check if two identical numbers are considered equal
assertEqual(1, 1); // Expected output: Assertion Passed

// Test 4: Check if two different numbers are considered unequal
assertEqual(1, 3); // Expected output: Assertion Failed
