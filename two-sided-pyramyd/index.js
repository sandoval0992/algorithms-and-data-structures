// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let aux = 1;
  for (let row = 0; row < n; row++) {
    // Create padding
    let padding = '';
    for (let x = n - aux; x > 0; x--) {
      padding += ' ';
    }
    // Create pattern
    let pattern = '';
    for (let y = 0; y < row + aux; y++) {
      pattern += '#';
    }
    aux++;
    console.log(`${padding}${pattern}${padding}`);
  }
}

pyramid(7);

module.exports = pyramid;
