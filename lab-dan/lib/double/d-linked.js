'use strict'

const Node = require('./node.js')

const DoublyLinkedList = module.exports = function(arr) {
  this.head = null
  this.tail = null
  if (Array.isArray(arr)) {
    arr.forEach(val => this.append(val))
  }
}

DoublyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val)
  if (!this.head) {
    this.head = node
    this.tail = node
    return node.value
  }
  node.next = this.head
  this.head.previous = node
  this.head = node
  return node.value
}

DoublyLinkedList.prototype.append = function(val) {
  let node = new Node(val)
  if (!this.tail) {
    this.head = node
    this.tail = node
    return node.value
  }
  node.previous = this.tail
  this.tail.next = node
  this.tail = node
  return node.value
}

DoublyLinkedList.prototype.removeHead = function() {
  if (!this.head) return
  if (!this.head.next) {
    let temp = this.head.value
    this.head = null
    this.tail = null
    return temp
  }
  let prevHead = this.head
  this.head = this.head.next
  this.head.previous = null
  prevHead.next = null
  return prevHead.value
}

DoublyLinkedList.prototype.removeTail = function() {
  if (!this.tail) return
  if (!this.tail.previous) {
    let temp = this.tail.value
    this.head = null
    this.tail = null
    return temp
  }
  let prevTail = this.tail
  this.tail = this.tail.previous
  this.tail.next = null
  prevTail.previous = null
  return prevTail.value
}

DoublyLinkedList.prototype.reverse = function() {
  // flip the list!
  let prevHead = this.head
  let currentNode = this.tail
  this.head = this.tail
  this.tail = prevHead
  while (currentNode) {
    let prevNode = currentNode.next
    currentNode.next = currentNode.previous
    currentNode.previous = prevNode
    currentNode = currentNode.next
  }
  return this.head
}

DoublyLinkedList.prototype.print = function() {
  let currentNode = this.head
  let string = ''
  while (currentNode) {
    string += `|${currentNode.value}| <=> `
    currentNode = currentNode.next
  }
  console.log(string)
}
