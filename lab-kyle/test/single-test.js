const expect = require('chai').expect
const SLL = require('../single-linked/single')

describe('Singly Linked List', function() {

  describe('prepend()', function() {
    let sll
    before(() => {
      sll = new SLL()
    })
    it('should create a new node as the SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null)
      sll.prepend(25)
      expect(sll.head.val).to.equal(25)
    })
    it('should add a new node as SLL.head', function() {
      sll.prepend(1)
      sll.prepend(2)
      expect(sll.head.val).to.equal(2)
    })
    it('should make the current SSL.head the next node in the list', function() {
      sll.prepend('first')
      sll.prepend('second')
      expect(sll.head.next.val).to.equal('first')
    })
  })

  describe('append()', function() {
    let sll
    before(() => {
      sll = new SLL()
    })
    it('should add a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null)
      sll.append(3)
      expect(sll.head.val).to.equal(3)
    })
    it('should add a new node after the last node', function() {
      expect(sll.head.next).to.equal(null)
      sll.append(7)
      expect(sll.head.next.val).to.equal(7)
    })
    it('should make the next value of sll.head the new node', function() {
      expect(sll.head.next).to.eql({val: 7, next: null})
    })
  })

  describe('removeFromHead()', function() {
    let sll
    before(() => {
      sll = new SLL()
    })
    it('should return null if the list is empty', function() {
      expect(sll.head).to.equal(null)
    })
    it('should remove the sll.head node and return its value', function() {
      expect(sll.head).to.equal(null)
      sll.append(1)
      let val = sll.removeFromHead()
      expect(val).to.equal(1)
      expect(sll.head).to.equal(null)
    })
    it('should update the new sll.head to the original heads next value', function() {
      sll.append(5)
      sll.append(10)
      sll.removeFromHead()
      expect(sll.head.val).to.equal(10)
    })
  })

  describe('removeLastNode()', function() {
    let sll
    before(() => {
      sll = new SLL()
    })
    it('should return null if the list is empty', function() {
      expect(sll.head).to.equal(null)
    })
    it('should remove the last node in the list', function() {
      sll.append(1)
      sll.append(2)
      sll.removeLastNode()
      expect(sll.head.next).to.equal(null)
    })
    it('should return the value of the last node', function() {
      sll.append(1)
      let val = sll.removeLastNode()
      expect(val).to.equal(1)
    })
  })
})
