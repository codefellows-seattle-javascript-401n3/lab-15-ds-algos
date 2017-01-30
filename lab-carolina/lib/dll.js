'use strict';

const Node = require('./dll-node.js');

const DoublyLinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.prepend = function(val) {
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

DoublyLinkedList.prototype.append = function(val) {
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

DoublyLinkedList.prototype.removeFromHead = function() {
  if (!this.head) return null;

  let node = this.head;

  if(!node.next) {
    this.head = null;
    this.tail = null;
    return node.val;
  }

  this.head = node.next;
  this.head.prev = null;
  return node.val;
};

DoublyLinkedList.prototype.removeFromTail = function() {
  if (!this.tail) return null;

  let node = this.tail;

  if (!node.prev) {
    this.head = null;
    this.tail = null;
    return node.val;
  }

  this.tail = node.prev;
  this.tail.next = null;
  return node.val;
};

DoublyLinkedList.prototype.reverse = function(){
  if(!this.head) return null; //if there is no head, return null for empty list
  if(!this.head.next) return this.head; //if there is no head.next return the head val/not enough nodes to reverse

  let node = this.head;//save the current head to a var
  let currTail = this.tail;//save the current tail to a var
  this.head = currTail;//swap the current head with the tail val
  this.tail = node;//swap the current tail with the head val

  _reverse(node);

  function _reverse(node) {
    if(!node) return; //if there is no node, do not continue on
    let nodePrev = node.prev; //save the current node's prev val to a var
    let nodeNext = node.next;//save the current node's next val to a var
    node.prev = nodeNext;//swap the current node's prev val with the it's next
    node.next = nodePrev;//swap the current node's next val with it's prev
    _reverse(node.prev);//do it again!
  }
  return this.head; //return the head value
};
