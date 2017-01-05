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

DoublyLinkedList.prototype.prepend = function() {
  let node = new Node();
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

};

DoublyLinkedList.removeFromLastNode = function() {

};

DoublyLinkedList.prototype.reverse = function() {

};