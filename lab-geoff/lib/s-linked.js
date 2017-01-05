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
  if(!this.head) {
    this.head = node;
    return this.head.val;
  }

};

SinglyLinkedList.prototype.prepend = function(val) {

};

SinglyLinkedList.prototype.removeFromHead = function() {

};

SinglyLinkedList.prototype.removeFromLastNode = function() {

};