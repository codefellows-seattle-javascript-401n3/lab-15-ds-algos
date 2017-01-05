const Node = require('./double-node')

const doublyLinkedList = module.exports = function(arr) {
  this.head = null
  this.tail = null
  if (Array.isArray(arr)) arr.forEach(val => this.append(val)) // lets you pass in an array of values
}

doublyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val)

  if (!this.head) {
    this.head = node
    this.tail = node
    return node.val
  }

  node.next = this.head
  this.head.prev = node
  this.head = node
  return node.val
}

doublyLinkedList.prototype.append = function(val) {
  let node = new Node(val)

  if(!this.tail) {
    this.head = node
    this.tail = node
    return node.val
  }

  node.prev = this.tail
  this.tail.next = node
  this.tail = node
  return node.val
}

doublyLinkedList.prototype.removeFromHead = function() {
  if (!this.head) return null

  let node = this.head

  if(!node.next) {
    this.head = null
    this.tail = null
    return node.val
  }

  this.head = node.next
  this.head.prev = null
  return node.val
}

doublyLinkedList.prototype.removeFromTail = function() {
  if (!this.tail) return null

  let node = this.tail

  if (!node.prev) {
    this.head = null
    this.tail = null
    return node.val
  }

  this.tail = node.prev
  this.tail.next = null
  return node.val
}

doublyLinkedList.prototype.reverse = function() {
  if(!this.head) return null

  let node = this.head

  if (!node.next) {
    return node.val
  }

  _reversePointers(node)

  function _reversePointers(node) {
    if (node) {
      let prevHolder = this.prev // hold the prev node
      this.prev = this.next      // reasign node.prev to node.next
      this.next = prevHolder     // reasing node.next to original val of node.prev
      _reversePointers(node.prev)
    }
  }

  this.head = this.tail
  this.tail = node
  return this.head
}
