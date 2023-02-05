// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let output = [];
  let aux = [];

  array.forEach((element, index, array) => {
    aux.push(element);

    if (aux.length === size) {
      output.push(aux);
      aux = [];
    } else if (index == array.length - 1) {
      output.push(aux);
    }
  });

  return output;
}

module.exports = chunk;
