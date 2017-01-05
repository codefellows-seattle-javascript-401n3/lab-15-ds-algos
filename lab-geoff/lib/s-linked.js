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
//(head)[next val][next val]
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
};

// SinglyLinkedList.prototype.removeFromHead = function() {
//
// };
//
// SinglyLinkedList.prototype.removeFromLastNode = function() {
//
// };