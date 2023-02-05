// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.

// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.source = new Stack();
    this.target = new Stack();
  }

  add(item) {
    this.source.push(item);
  }

  remove() {
    this.#move(this.source, this.target);
    let item = this.target.pop();
    this.#move(this.target, this.source);
    return item;
  }

  peek() {
    this.#move(this.source, this.target);
    let item = this.target.peek();
    this.#move(this.target, this.source);
    return item;
  }

  #move(source, target) {
    while (source.peek()) {
      target.push(source.pop());
    }
  }
}

module.exports = Queue;
