'use strict';

const Node = require('./sll-node.js');

const SinglyLinkedList = module.exports = function(arr) {
  this.head = null;
  if (Array.isArray(arr)) arr.forEach(val => this.append(val));
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

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  _setLastNode(this.head); // sets the lastNode variable to the last node in our list
  lastNode.next = node;
  return node.val;

  function _setLastNode(node) {
    if (!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

SinglyLinkedList.prototype.removeFromHead = function() {
  if (!this.head) return null;
  let val = this.head.val;
  this.head = this.head.next;
  return val;
};

SinglyLinkedList.prototype.removeLastNode = function() {
  let lastNode = null;

  if (!this.head) return null;

  _findLastNode(this.head);

  function _findLastNode(node) {
    if (!node.next.next) {
      lastNode = node.next;
      node.next = null;
      return;
    }
    _findLastNode(node.next);
  }

  return lastNode.val;
};
