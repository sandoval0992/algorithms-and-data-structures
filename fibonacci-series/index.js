// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.

// Example:
//   fib(4) === 3

function fib(n) {
  let secondToLast = 0;
  let last = 1;

  if (n <= 0) return secondToLast;

  if (n === 1) return last;

  let next = 0;
  for (let x = 0; x <= n - 2; x++) {
    next = last + secondToLast;
    secondToLast = last;
    last = next;
  }
  return last;
}

module.exports = fib;
