// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.

// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let x = 1; x <= n; x++) {
    let multipleOfThree = x % 3 === 0 ? true : false;
    let multipleOfFive = x % 5 === 0 ? true : false;

    let output = x;

    if (multipleOfThree) {
      output = 'fizz';
      if (multipleOfFive) {
        output = 'fizzbuzz';
      }
    } else if (multipleOfFive) {
      output = 'buzz';
    }
    console.log(output);
  }
}

fizzBuzz(10);

module.exports = fizzBuzz;
