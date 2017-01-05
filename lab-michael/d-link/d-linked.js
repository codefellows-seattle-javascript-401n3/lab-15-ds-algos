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

//(HEAD)[val,prev,next] <=>[val,prev,next] <=> [val,prev,next](TAIL)