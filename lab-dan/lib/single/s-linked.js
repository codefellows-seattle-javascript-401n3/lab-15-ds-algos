'use strict'

const Node = require('./node.js')

const SinglyLinkedList = module.exports = function(arr) {
  this.head = null
  if(Array.isArray(arr)) {
    arr.forEach(val => this.append(val))
  }
}

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val)

  if(!this.head) {
    this.head = node
    return node.value
  }

  node.next = this.head
  this.head = node
  return node.value
}

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val)
  let lastNode = null

  if(!this.head) {
    this.head = node
    return node.value
  }

  _setLastNode(this.head)
  // while(currentNode.next) {
  //   currentNode = currentNode.next
  // }

  function _setLastNode(node) {
    if(!node) return
    lastNode = node
    _setLastNode(lastNode.next)
  }
  lastNode.next = node
  return node.value
}

SinglyLinkedList.prototype.removeHead = function() {
  if(!this.head) return
  let prevHead = this.head
  this.head = this.head.next
  prevHead.next = null
  return prevHead.value
}

SinglyLinkedList.prototype.removeTail = function() {
  if(!this.head) return
  let val = null
  let secondLastNode = this.head
  if(!this.head.next) {
    val = this.head.value
    this.head = null
    return val
  }
  while(secondLastNode.next.next) {
    secondLastNode = secondLastNode.next
  }
  val = secondLastNode.next.value
  secondLastNode.next = null
  return val
}


SinglyLinkedList.prototype.print = function() {
  let currentNode = this.head
  let string = ''
  while (currentNode) {
    string += `|${currentNode.value}| -> `
    currentNode = currentNode.next
  }
  console.log(string)
}
