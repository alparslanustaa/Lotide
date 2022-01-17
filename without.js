
const without = function (source, itemsToRemove) {
  for (let i = 0; source.length > i; i++) {
    for (let j = 0; itemsToRemove > j; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1)
      }
    }
  }
  return source;
}

module.exports = without;
