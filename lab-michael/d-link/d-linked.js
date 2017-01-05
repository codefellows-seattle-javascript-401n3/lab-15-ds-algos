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
  let currentNode;
  if (this.head === null) {
    return;
  }
  currentNode = this.head;

  while(currentNode != null){
    let temp = currentNode.next;
    currentNode.next = currentNode.prev;
    currentNode.prev = temp;
    currentNode = currentNode.prev;
    console.log(currentNode);
    // return currentNode;
  }
};

var list = new DoubleLinkedList();
// list.prepend(new Node(4));
// console.log(list.prepend(new Node(4)));
list.prepend(new Node(3));
console.log(list.prepend(new Node(3)));

list.prepend(new Node(2));
console.log(list.prepend(new Node(2)));

list.prepend(new Node(1));
console.log(list.prepend(new Node(1)));

console.log(list.head);
list.reverse();
// console.log(list.reverse());
console.log(list);



//(HEAD)[val,prev,next] <=>[val,prev,next] <=> [val,prev,next](TAIL)