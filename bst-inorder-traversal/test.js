const Node = require('./index');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  expect(node.left.data).toEqual(5);
  expect(node.right.data).toEqual(15);
  expect(node.right.right.data).toEqual(17);
});

test('inorderTraversal function', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(0);
  node.insert(8);
  node.insert(6);

  const result = node.inorderTraversal(node);
  expect(result).toEqual([0, 5, 6, 8, 10, 15]);
});
