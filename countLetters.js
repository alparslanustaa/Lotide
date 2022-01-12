// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
	const count = {};
	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		if (!count[letter]) {
			count[letter] = 1;
		} else {
			count[letter]++;
		}
	}
	return count;
};

console.log(countLetters("LIGHTHOUSEISINTHEHOUSE FUNCTION TEST COUNT LETTERS!"));
