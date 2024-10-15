// IMPORT FUNCTIONS
const tail = require('../tail'); // Import the tail function from the tail.js module
const assertEqual = require('../assertEqual'); // Import the assertEqual function for testing

// TEST CODE
// Test case 1: Ensure original array is not modified
console.log("Test Case 1");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


// Test Case 2: Check the returned array elements
console.log("Test Case 2");
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 3: Single or empty element array
// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail
console.log("Test Case ");
result = tail(["Hello"]);
assertEqual(result.length, 0); // ensure we get back 0-length array
assertEqual(result[0], undefined); // ensure first element is undefined as an empty array is undefined
result = tail([]);
assertEqual(result.length, 0); // ensure we get back 0-length array
assertEqual(result[0], undefined); // ensure first element is undefined as an empty array is undefined