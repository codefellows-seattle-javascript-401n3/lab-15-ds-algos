const Node = require('./single-node')

const SinglyLinkedList = module.exports = function(arr) {
  this.head = null
  if (Array.isArray(arr)) arr.forEach(val => this.append(val)) // lets you pass in an array of values
}

SinglyLinkedList.prototype.prepend = function(val) {
  // add to front of list
  let node = new Node(val)

  if (!this.head) {
    this.head = node
    return node.val // this.head.val - up to dev
  }

  node.next = this.head
  this.head = node
  return node.val
}

SinglyLinkedList.prototype.append = function(val) {
 // add to back of list
  let node = new Node(val)
  let lastNode = null

  if(!this.head) {
    this.head = node
    return node.val
  }

  _setLastNode(this.head)

  lastNode.next = node
  return node.val

  function _setLastNode(node) {
    if (!node) return
    lastNode = node
    _setLastNode(node.next)
  }
}

SinglyLinkedList.prototype.removeFromHead = function() {
  if (!this.head) return null
  let val = this.head.val
  this.head = this.head.next
  return val
}

SinglyLinkedList.prototype.removeLastNode = function() {
  let lastNode = null

  if (!this.head) return null

  _findLastNode(this.head)

  function _findLastNode(node) {
    if (!node.next.next) {
      lastNode = node.next
      node.next = null
      return
    }
    _findLastNode(node.next)
  }

  return lastNode.val
}
