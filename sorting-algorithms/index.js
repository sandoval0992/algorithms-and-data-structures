// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length - x - 1; y++) {
      if (arr[y] > arr[y + 1]) {
        let lesser = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    let indexOfMin = x;
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[indexOfMin]) indexOfMin = y;
    }
    if (indexOfMin !== x) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[x];
      arr[x] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

mergeSort([7, 4, 5, 3, 1, 8, 2, 6]);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
