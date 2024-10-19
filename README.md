# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @arcanecipher/lotide`

**Require it:**

`const _ = require('@arcanecipher/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(...)`: Compares two arrays and returns true if they are equal, false otherwise
- `assertEqual(...)`: Compares two values and returns true if they are strictly equal, false otherwise
- `assertObjectsEqual(...)`: Logs a message to the console based on whether two objects are equal
- `countLetters(...)`: Takes a string and returns an object containing the counts of each letter in the string
- `countOnly(...)`: Counts specified items from an array, based on the itemsToCount object
- `eqArrays(...)`: Compares two arrays for a perfect match (strict equality of elements and order)
- `eqObjects(...)`: Compares two objects to check if they are equal
- `findKey(...)`: Finds the first key in an object where the callback function returns true for the value
- `findKeyByValue(...)`: Finds the first key in an object that matches the specified value
- `flatten(...)`: Flattens a nested array into a single-level array
- `head(...)`: Returns the first element of an array
- `isObject(...)`: Evaluates a value to check if is strictly an object. Will exclude null, Arrays, and Functions as "objects"
- `letterPositions(...)`: Returns an object where each key is a character from the input sentence
- `map(...)`: Takes an array and a callback function, applies the callback to each item in the array, and returns a new array with the results
- `middle(...)`: Returns the middle element(s) of an array
- `tail(...)`: Returns the last element of an array
- `takeUntil(...)`: Returns a slice of the array with elements taken from the beginning until the callback function returns a truthy value.
- `without(...)`: Returns a new array that excludes specific unwanted elements from the source array
