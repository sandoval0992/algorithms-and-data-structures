// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    // List is empty
    if (!this.head) return;

    // List only contains 1 element
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.getLast().next = node;
    }
  }

  getAt(position) {
    let index = 0;
    let node = this.head;

    while (node) {
      if (position === index) break;
      index++;
      node = node.next;
    }

    // Return null when list is empty or node at 'required' position does not exists
    return !node ? null : node;
  }

  removeAt(index) {
    /*
    Edga cases
    1.- Remove node from empty list
    2.- Remove first node from list with 1 element
    3.- Remove last node from list
    4.- Remove non existing node from list
    */
    if (!this.head || index > this.size() - 1) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    this.getAt(index - 1).next = this.getAt(index + 1);
  }

  insertAt(data, index) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const target = this.getAt(index);
    previous.next = node;
    node.next = target;
  }

  forEach(fn) {
    let node = this.head;

    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
