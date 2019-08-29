// piece of data -val
// reference to next node. - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  // add to the end of this linked list
  push(val) {
    var node = new Node(val);

    if (this.head === null) this.head = node;

    if (this.tail !== null) this.tail.next = node;

    this.tail = node;

    this.length++;
  }

  // remove from the end of the linkedlist
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return undefined;
    }

    let prev,
      current = this.head;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;
  }

  // to add item to the beginning of the list.
  unshift(val) {
    let node = new Node(val);

    if (this.length === 0) this.head = this.tail = node;
    else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  // to remove item from  the beginning of the list.
  shift() {
    if (this.head === null) return undefined;

    let headNode = this.head;

    if (headNode.next === null) this.tail = null;

    this.head = headNode.next;
    this.length--;
  }

  // print all the items of array to console.
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // to get the item present at index given
  get(pos) {
    if (pos < 0 || pos > this.length - 1) return undefined;
    if (pos === this.length - 1) return this.tail.val;

    var count = 0;
    var current = this.head;
    while (count < pos) {
      current = current.next;
      count++;
    }

    return current.val;
  }

  // to set the item present at index given
  set(pos, val) {
    if (pos < 0 || pos > this.length - 1) return false;
    if (pos === this.length - 1) {
      this.tail.val = val;
      return true;
    }

    var count = 0;
    var current = this.head;
    while (count < pos) {
      current = current.next;
      count++;
    }

    current.val = val;
    return true;
  }

  // class definition ends here...
}

//   using SinglyLinkedList

var list = new SinglyLinkedList();
console.log(list);
