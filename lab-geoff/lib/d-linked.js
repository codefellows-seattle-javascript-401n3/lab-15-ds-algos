'use strict';
let Node = require('../model/node.js');

let DoublyLinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  if(!this.tail) {
    this.head = node;
    this.tail = node;
    return node.val;
  }
  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return node.val;
};

DoublyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);
  if(!this.head) {
    this.head = node;
    this.tail = node;
    return this.head.val;
  }
  node.next = this.head;
  this.head.prev = node;
  this.head = node;
  return this.head.val;
};

DoublyLinkedList.prototype.removeFromHead = function() {
  if(!this.head) {
    return null;
  }
  if(!this.head.next) {
    let val = this.head.val;
    this.head = null;
    this.tail = null;
    return val;
  }
  let val = this.head.val;
  this.head = this.head.next;
  return val;
};

DoublyLinkedList.removeFromLastNode = function() {
  if(!this.tail) {
    return null;
  }
  if(!this.tail.prev) {
    let val = this.tail.val;
    this.tail = null;
    this.head = null;
    return val;
  }
  let val = this.tail.val;
  this.tail = this.tail.prev;
  return val;
};

DoublyLinkedList.prototype.reverse = function() {
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

  function _reverse(_node) {
    if(!_node) {
      console.log('no node');
      return;
    }
    let next = _node.next;
    let prev = _node.prev;
    _node.next = prev;
    _node.prev = next;
    _reverse(_node.prev);
  }
};