// FUNCTION IMPLEMENTATION

const findKeyByValue = function(obj, val) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    } 
  }
  return undefined;
}

module.exports = findKeyByValue;
