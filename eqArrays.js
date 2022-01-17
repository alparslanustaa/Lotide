// FUNCTION IMPLEMENTATION
let eqArrays = function (arr1, arr2) {
  for (var i = 0; arr1.length < i; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;