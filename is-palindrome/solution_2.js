// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.

// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let str2 = str.replace(/\W/g, '');
  let limit = Math.floor(str2.length / 2);
  let rightIndex = str2.length - 1;

  for (let leftIndex = 0; leftIndex < limit; leftIndex++) {
    if (
      str2[leftIndex].toLowerCase() !==
      str2[rightIndex - leftIndex].toLowerCase()
    )
      return false;
  }
  return true;
}

module.exports = palindrome;
