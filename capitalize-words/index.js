// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let output = [];
  let index = 0;

  for (let char of str) {
    if (char == ' ') {
      index++;
    } else {
      output[index] = !output[index]
        ? char.toUpperCase()
        : (output[index] += char);
    }
  }
  return output.join(' ');
}

module.exports = capitalize;
