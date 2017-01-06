const Node = require('./node');

const DoubleLinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;

};

DoubleLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

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

DoubleLinkedList.prototype.append = function(val) {
  let node = new Node(val);

  if (!this.tail) {
    this.head = node;
    this.tail = node;
    return node.val;
  }

  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return node.val;
};

DoubleLinkedList.prototype.removeHead = function() {
  if(!this.head) return;

  if(!this.head.next) {
    let frontNode = this.head;
    this.head = null;
    return frontNode.val;
  }

  let frontNode = this.head;
  this.head.next = this.head;
  this.head.prev = null;
  return frontNode.val;
};

DoubleLinkedList.prototype.removeTail = function() {
  if(!this.tail) return;

  if(!this.tail.prev) {
    let lastNode = this.tail;
    this.tail = null;
    return lastNode.val;
  }

  let lastNode = this.tail;
  this.tail.prev = this.tail;
  this.tail.next = null;
  return lastNode.val;
};

DoubleLinkedList.prototype.reverse = function() {
  if(!this.head) {
    return null;
  }
  if(!this.head.next) {
    return this.head.val;
  }
  _reverse(this.head);

  let prevHead = this.head;
  let prevTail = this.tail;
  this.head = prevTail;
  this.tail = prevHead;
  return this.head.val;

  function _reverse(node) {
    if(!node) return;
    let next = node.next;
    let prev = node.prev;
    node.next = prev;
    node.prev = next;
    _reverse(node.prev);
  }
};

//(HEAD)[val,prev,next] <=>[val,prev,next] <=> [val,prev,next](TAIL)