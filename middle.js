const assertEqual = function (actual, expected) {

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

const middle = function(arr){
  if(arr.length<=2){
      return [];
  }else if(arr.length %2 === 0){
      let middle1 = arr.length/2-1;
      let middle2 = arr.length/2;
      return arr[middle1],arr[middle2];
  }else{
   return [arr[Math.floor(arr.length / 2)]];
  }
}


// assertEqual(middle([1])) // => []
// assertEqual(middle([1, 2])) // => []
// assertEqual(middle([1, 2, 3])) // => [2]
// assertEqual(middle([1, 2, 3, 4,])) // => [3]