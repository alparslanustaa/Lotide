// FUNCTION IMPLEMENTATION

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

module.exports = letterPositions;
