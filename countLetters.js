// FUNCTION IMPLEMENTATION
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

module.exports = countLetters;