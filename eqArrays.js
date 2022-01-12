// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
let eqArrays = function (arr1, arr2) {
  for (var i = 0; arr1.length < i; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false