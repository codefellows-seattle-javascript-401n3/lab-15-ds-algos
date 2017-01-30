const Node = require('./node')

const SinglyLinkedList = module.exports = function(arr) {
  this.head = null
  if(Array.isArray(arr)) arr.forEach(val => (this.append.val))
}

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val)

  if(!this.head) {
    this.head = node
    return node.val
  }

  node.next = this.head
  this.head = node
  return node.val
}

SinglyLinkedList.prototype.apppend = function(val) {
  let node = new Node(val)

  if(!this.head) {
    this.head = node
    return node.val
  }

  _setLastNode(this.head)//sets the lastNode variable to the last node in our list. Underscore helper functions
  lastNode.next = node
  return node.val

  function _setLastNode(node) {
    if(!node) return
    lastNode = node
    _setLastNode(node.next)
  } 



//(HEAD)[val, next] => [val, next] => [val, next] => [val, next]
//prepend() adds a new mode at the HEAD append() adds a new after last node
