const Node = require('./dnode');

const DoublyLinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.prepend = function(val) {
  let node  = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
    return node.val;
  }
  node.next = this.head;
  this.head.prev = node;
  this.head = node;
  return node.val;
};

DoublyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  if (!this.tail) {
    this.tail = node;
    this.head = node;
    return node.val; //this is unnecessary on an insert
  }
  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return node.val;
};


DoublyLinkedList.prototype.removeLast = function() {
  if (!this.tail) return;
  if(!this.tail.prev) {
    let tail = this.tail;
    this.tail = null;
    return tail.val;
  }
  let tail = this.tail;
  this.tail.prev = this.tail;
  this.tail.next = null;
  return tail.val;
};

DoublyLinkedList.prototype.removeLast = function() {
  if(!this.front) return;
  if(!this.head.next) {
    let front = this.head;
    this.head = null;
    return front.val;
  }
  let front = this.head;
  this.head.next = this.head;
  this.head.prev = null;
  return front.val;
};
