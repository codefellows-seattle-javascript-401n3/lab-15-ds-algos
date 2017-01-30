'use strict'

const expect = require('chai').expect
const DoublyLinkedList = require('../lib/double/d-linked')
let [a, b, c] = [1, 2, 3]


describe('Doubly-linked list module', function() {
  describe('prepend', function() {
    let dll = new DoublyLinkedList()
    it('should create a new node and add to dll.head when list is empty', function() {
      dll.prepend(a)
      expect(dll.head.value).to.equal(a)
      expect(dll.tail.value).to.equal(a)
      expect(dll.head).to.equal(dll.tail)
      expect(dll.head.next).to.be.null
      expect(dll.head.previous).to.be.null
    })
    it('should create a new node and add to dll.head when list has existing node(s)', function() {
      dll.prepend(b)
      expect(dll.head.value).to.equal(b)
      expect(dll.tail.value).to.equal(a)
      expect(dll.tail.previous.value).to.equal(b)
      expect(dll.head.next.value).to.equal(a)
      expect(dll.head.previous).to.be.null
      expect(dll.tail.next).to.be.null
    })
  })

  describe('append', function() {
    let dll = new DoublyLinkedList()
    it('should create a new node and add to dll.head when list is empty', function() {
      dll.append(a)
      expect(dll.head.value).to.equal(a)
      expect(dll.tail.value).to.equal(a)
      expect(dll.head).to.equal(dll.tail)
      expect(dll.head.next).to.be.null
      expect(dll.head.previous).to.be.null
    })

    it('should create a new node and add to end of list with existing node', function() {
      dll.append(b)
      expect(dll.head.value).to.equal(a)
      expect(dll.tail.value).to.equal(b)
      expect(dll.tail.previous.value).to.equal(a)
      expect(dll.head.next.value).to.equal(b)
      expect(dll.head.previous).to.be.null
      expect(dll.tail.next).to.be.null
    })
  })

  describe('removeHead', function() {
    let dll = new DoublyLinkedList([a, b])
    it('should remove the head node and replace it with next', function() {
      expect(dll.removeHead()).to.equal(a)
      expect(dll.head.value).to.equal(b)
      expect(dll.head).to.equal(dll.tail)
    })
    it('should remove the head node and set list as null when last node', function() {
      expect(dll.removeHead()).to.equal(b)
      expect(dll.head).to.be.null
      expect(dll.tail).to.be.null
    })
    it('should return undefined when the list is empty', function() {
      expect(dll.removeHead()).to.be.undefined
    })
  })

  describe('removeTail', function() {
    let dll = new DoublyLinkedList([a, b])
    it('should remove the tail node', function() {
      expect(dll.removeTail()).to.equal(b)
      expect(dll.head.value).to.equal(a)
      expect(dll.head).to.equal(dll.tail)
    })
    it('should remove the head node and set list as null when last node', function() {
      expect(dll.removeTail()).to.equal(a)
      expect(dll.head).to.be.null
      expect(dll.tail).to.be.null
    })
    it('should return undefined when the list is empty', function() {
      expect(dll.removeTail()).to.be.undefined
    })
  })

  describe('reverse', function() {
    let dll = new DoublyLinkedList([a, b, c])
    dll.reverse()
    it('should properly reverse the  list', function() {
      expect(dll.head.value).to.equal(c)
      expect(dll.head.next.value).to.equal(b)
      expect(dll.tail.value).to.equal(a)
    })
  })

})
