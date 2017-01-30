'use strict';

const Node = require('./node/sll-node');

const SinglyLinkedList = module.exports = function(arr) {
  if(Array.isArray(arr)) arr.forEach(val => this.append(val));
};


SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if(!this.head) {
    this.head = node;
    return node.val; //then break out of function
  }

  node.next = this.head;
  this.head = node;
  return node.val;

};

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return node.val;
  }

  _setLastNode(this.head);//helper function sets the lastNode variable to the last node in our list
  lastNode.next = node;
  return node.val;

  function _setLastNode(node) {
    if(!node) return; //base case for recursive function
    lastNode = node;
    _setLastNode(node.next);
  }
};

SinglyLinkedList.prototype.removeHead = function() {
  let prevHead = null;
  this.head = prevHead.next;
  prevHead.next = null;
  return prevHead.val;
};

SinglyLinkedList.prototype.removeTail = function() {
  let val = null;
  let secondLastNode = this.head;
  if(!this.head) return;
  if(!this.head.next) {
    val = this.head.val;
    this.head = null;
    return val;
  }
  while(secondLastNode.next.next) {
    secondLastNode = secondLastNode.next;
  }
  val = secondLastNode.next.val;
  secondLastNode.next = null;
  return val;
};

//(HEAD)[val, next] => [val, next] => [val, next] => [val, next]
//methods:
// -prepend() adds a new node at the HEAD
//-append() adds a new node after last node
// insertions - remove from HEAD (beginning)
