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
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  
  for (const key of obj1Keys) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
    } else if (obj2Keys.includes(key) === true) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

// Test cases
// Test 1
console.log("Test 1:");
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// Test 2
console.log("Test 2:");
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
// eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// Test 3
console.log("Test 3:");
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
); // => true

// Test 4
console.log("Test 4:");
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
); // => false
