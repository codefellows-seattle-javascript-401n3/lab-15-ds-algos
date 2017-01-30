const Node = require('./node');

const SingleLinkedList = module.exports = function(arr) {
  this.head = null;
  if(Array.isArray(arr)) arr.forEach(val => this.append(val)); //append multiple to list
};

SingleLinkedList.prototype.prepend = function (val) {
  let node = new Node(val);
  if(!this.head) {
    this.head = node;
    return node.val;// this.head.val
  }
  node.next = this.head; // see below
  this.head = node;
  return node.val;
};

SingleLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let lastNode = null;
  if(!this.head) {
    this.head = node;
    return node.val;
  }
  _setLastNode(this.head); // sets the lastNode var to the last node in our list
  lastNode.next = node;
  return node.val;

  function _setLastNode(node) {
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};
SingleLinkedList.prototype.removeHead = function() {
  if(!this.head) return;

  if(!this.head.next) {
    let frontNode = this.head;
    this.head = null;
    return frontNode.val;
  }

  let frontNode = this.head;
  this.head = this.head.next;
  return frontNode.val;
};

SingleLinkedList.prototype.removeTail = function() {
  if(!this.head) return;

  if(!this.head.next) {
    let lastNode = this.head;
    this.head = null;
    return lastNode.val;
  }

  let secondToLastNode = null;
  _setSecondToLastNode(this.head);


  let lastNode = secondToLastNode.next;
  secondToLastNode.next = null;

  function _setSecondToLastNode(node) {
    if(!node.next) return;

    secondToLastNode = node;
    _setSecondToLastNode(node.next);
  }

  return lastNode.val;
};



//[val,next] => (HEAD)[val, next] => [val, next] => [val, next] => [val,next]
// Prepend() adds a new node at the end of HEAD  Append() adds new node after last node