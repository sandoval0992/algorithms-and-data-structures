// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let x = 1; x <= n; x++) {
    let shape = '';
    for (let y = 1; y <= n; y++) {
      if (y <= x) {
        shape += '#';
      } else {
        shape += ' ';
      }
    }
    console.log(shape);
  }
}

steps(5);

module.exports = steps;
