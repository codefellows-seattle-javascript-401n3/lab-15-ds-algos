'use strict';

const Node = require('./snode');

const SinglyLinkedList = module.exports = function(arr) {
  this.head = null;
  if(Array.isArray(arr)) arr.forEeach(val => this.append(val)); //if you need to append a bunch of value to a linked list
};

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    return node.val;
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
  _setLastNode(this.head); //sets the last node variable to the last node in our list
  lastNode.next = node;
  return node.val;

  function _setLastNode(node) {
    if (!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

SinglyLinkedList.prototype.removeLast = function() {
  if(!this.head) return;  //if the list is empty, get out
  if(!this.head.next) { //if the list has only one node
    let lastNode = this.head; //temp variable is equal to the head value
    this.head = null; //head value is null
    return lastNode.val; //return the value of the temp variable
  }
  let secondToLastNode = null; //let a temp varibale be null
  _setSecondToLastNode(this.head); //helper function that is recursive and identifies the second to last node
  let lastNode = secondToLastNode.next; //last node i
  secondToLastNode.next = null;
  function _setSecondToLastNode(start) {
    if(!start.next) return;
    secondToLastNode = start;
    _setSecondToLastNode(start.next);
  }
  return lastNode.val;
};

SinglyLinkedList.prototype.removeFirst = function() {
  if(!this.head) return; //if empty list, get out
  if(!this.head.next) { //if list is only one value
    let front = this.head; //temp value equals the head
    this.head = null; //the head equals null
    return front.val; //return value of temp variable
  }
  let front = this.head; //head of the list equals temp value
  this.head = null; //the head is null
  this.head = front.next;  //the value after the head is now the head
  return front.val; //return the value of the temp variable
};

//(HEAD)[val, next] => [val, next] => [val, next] => [val, next]
//prepend adds a new node at the head.
//append adds a new node at the tail

//implement remove from head and remove from last node from a single linked list.
