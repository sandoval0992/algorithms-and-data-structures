// --- Directions
// Given a string, return the character that is most
// commonly used in the string.

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxCharacter = '';
  let count = 0;

  for (item of str) {
    let tmpCount = 0;
    for (character of str) {
      if (item === character) tmpCount++;
    }
    if (tmpCount > count) {
      count = tmpCount;
      maxCharacter = item;
    }
  }
  return maxCharacter;
}

module.exports = maxChar;
