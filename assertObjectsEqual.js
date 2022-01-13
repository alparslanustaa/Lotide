const assertObjectsEqual = function(obj1,obj2){
  const inspect = require('util').inspect; 
  if(eqObjects(obj1,obj2)){
      console.log(`✅✅✅  Assertion passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
}

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