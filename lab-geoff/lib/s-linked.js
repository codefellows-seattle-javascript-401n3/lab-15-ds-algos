'use strict';
let Node = require('../model/node.js');

let SinglyLinkedList = module.exports = function(arr) {
  this.head = null;
  if(Array.isArray(arr)) {
    arr.forEach(val => {
      this.append(val);
    });
  }
};

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let lastNode = null;
  if(!this.head) {
    this.head = node;
    return this.head.val;
  }
  _setLastNode(this.head);
  lastNode.next = node;
  return lastNode.next.val;

  function _setLastNode(_node) {
    if(!_node) return;
    lastNode = _node;
    _setLastNode(_node.next);
  }
};

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);
  if(!this.head) {
    this.head = node;
    return this.head.val;
  }
  node.next = this.head;
  this.head = node;
  return this.head.val;
};

SinglyLinkedList.prototype.removeFromHead = function() {
  if(!this.head) {
    return null;
  }
  let val = this.head.val;
  this.head = this.head.next;
  return val;
};

SinglyLinkedList.prototype.removeFromLastNode = function() {
  let secToLast = null;
  if(!this.head) {
    return null;
  }
  _setSecondToLastNode(this.head);
  let val = secToLast.next.val;
  secToLast.next = null;
  return val;

  function _setSecondToLastNode(_node) {
    if(!_node.next) {
      secToLast = _node;
      return;
    }
    secToLast = _node;
    _setSecondToLastNode(_node.next);
  }
};