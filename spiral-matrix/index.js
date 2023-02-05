// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.

// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]

//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]

//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrix = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ];

  let m = 3;
  let row = 0;
  let column = 0;
  for (let x = 0; x < m * m; x++) {
    console.log(`${row},${column}`);

    if (row === 0 && column <= m - 1) {
      console.log(matrix[row][column++]);
    }

    if (row == 0 && column === m - 1) {
      row++;
    }

    if (column === m - 1 && row <= m - 1) {
      console.log(matrix[row++][column]);
    }
  }
}

matrix(4);

module.exports = matrix;
