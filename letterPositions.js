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

const letterPositions = function (sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char !== ' ') {
      // If the character is already in results, push the index to its array
      if (results[char]) {
        results[char].push(i);
      } else {
        // If the character is not yet in results, create a new array with the index
        results[char] = [i];
      }
    }
  }

  return results;
};

/* 
What would the resulting object look like with the same example string that we used before ("lighthouse in the house")?
  {
    l: [0], 
    i: [1, 11], 
    g: [2], 
    h: [3, 5, 15, 18], 
    t: [4, 14], 
    o: [6, 19], 
    u: [7, 20], 
    s: [8, 21], 
    e: [9, 16, 22], 
    n: [12] 
  }
*/

// Test case: 
console.log(letterPositions("hello"));
const result = letterPositions("hello");
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);