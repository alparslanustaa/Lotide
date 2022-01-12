const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let without = function (source, itemsToRemove) {
  for (let i = 0; source.length > i; i++) {
    for (let j = 0; itemsToRemove > j; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1)
      }
    }
  }
  return source;
}


assertEqual(without([1, 2, 3], [1])) // => [2, 3]) // => [2, 3]
assertEqual(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]