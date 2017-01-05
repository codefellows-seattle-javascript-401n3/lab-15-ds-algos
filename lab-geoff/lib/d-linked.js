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
    return this.tail.val;
  }
  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return this.tail.val;
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

};