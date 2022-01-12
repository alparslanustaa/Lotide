// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function (arr1, arr2) {
  for (var i = 0; arr1.length < i; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const output = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (output[sentence[i]]) {
        output[sentence[i]].push(i);
      } else {
        output[sentence[i]] = [i]
      }
    }
  }
  return output;
}

assertArrayEqual(letterPositions("hello").e, [1]);
