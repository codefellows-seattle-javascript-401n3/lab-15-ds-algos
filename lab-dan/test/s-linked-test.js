'use strict'

const expect = require('chai').expect
const SinglyLinkedList = require('../lib/single/s-linked')
let [a, b] = [1, 2]


describe('singly-linked list module', function() {
  describe('prepend', function() {
    let sll = new SinglyLinkedList()
    it('should create a new node and add to sll.head when list is empty', function() {
      sll.prepend(a)
      expect(sll.head.value).to.equal(a)
      expect(sll.next).to.be.undefined
    })
    it('should create a new node and add to sll.head when list has existing node(s)', function() {
      sll.prepend(b)
      expect(sll.head.value).to.equal(b)
      expect(sll.head.next.value).to.equal(a)
    })
  })

  describe('append', function() {
    let sll = new SinglyLinkedList()
    it('should create a new node and add to sll.head when list is empty', function() {
      sll.append(a)
      expect(sll.head.value).to.equal(a)
      expect(sll.next).to.be.undefined
    })

    it('should create a new node and add to end of list with existing node', function() {
      sll.append(b)
      expect(sll.head.value).to.equal(a)
      expect(sll.head.next.value).to.equal(b)
    })
  })

  describe('removeHead', function() {
    let sll = new SinglyLinkedList([a, b])
    it('should remove the head node and replace it with next', function() {
      expect(sll.removeHead()).to.equal(a)
      expect(sll.head.value).to.equal(b)
    })
    it('should remove the head node and set list as null when last node', function() {
      expect(sll.removeHead()).to.equal(b)
      expect(sll.removeHead()).to.be.undefined
    })
  })

  describe('removeTail', function() {
    let sll = new SinglyLinkedList([a, b])
    it('should remove the tail node', function() {
      expect(sll.removeTail()).to.equal(b)
      expect(sll.head.value).to.equal(a)
    })
    it('should remove the head node and set list as null when last node', function() {
      expect(sll.removeTail()).to.equal(a)
      expect(sll.removeTail()).to.be.undefined
    })
  })
})
