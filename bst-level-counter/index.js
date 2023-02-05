// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.

// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const separator = '|';
  let nodes = [root, separator];
  let counters = [0];

  while (nodes.length) {
    const node = nodes.shift();

    if (typeof node === 'object') {
      if (node.children) nodes.push(...node.children);
      counters[counters.length - 1]++;
    } else {
      nodes.push(node);
      counters.push(0);
    }

    if (nodes.length === 1 && nodes[0] === separator) break;
  }

  return counters;
}

module.exports = levelWidth;
