// --- Directions
// Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedString = '';
  for (index = str.length - 1; index >= 0; index--) {
    reversedString += str[index];
  }
  return reversedString;
}

module.exports = reverse;
