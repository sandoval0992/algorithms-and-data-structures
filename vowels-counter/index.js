// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.

// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index].toLowerCase())) {
      count++;
    }
  }

  return count;
}

vowels('jose ivan sandoval romero');

module.exports = vowels;
