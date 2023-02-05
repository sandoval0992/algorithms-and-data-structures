// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.

// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numStr = n.toString();

  if (n === 0) return 0;

  return n > 0
    ? parseInt(reverseStr(numStr))
    : parseInt('-' + reverseStr(numStr.slice(1)));
}

function reverseStr(str) {
  return str.split('').reduce((reversed, item) => {
    return item + reversed;
  });
}

module.exports = reverseInt;
