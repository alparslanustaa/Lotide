// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {

  for (var i = 0; arr1.length < i; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  let Arr1 = Object.keys(object1);
  let Arr2 = Object.keys(object2);

  if (Arr1.length !== Arr2.length) {
    return false;
  }

  for (val of Arr1) {
    if (Array.isArray(object1[val]) || Array.isArray(object2[val])) {
      if (!eqArrays(object1[val], object2[val])) {
        return false;
      }
    } else if (object1[val] === object2[val]) {
      return true;
    }
  }
  return false;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false