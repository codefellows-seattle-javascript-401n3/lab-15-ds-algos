const expect = require('chai').expect
const DLL = require('../double-linked/double')

describe('A Doubly linked list', function() {

  describe('prepend()', function() {
    let dll
    before(() => {
      dll = new DLL()
    })
    it('should create a new node as the DLL.head if the list is empty', function() {
      expect(dll.head).to.equal(null)
      dll.prepend(5)
      expect(dll.head.val).to.equal(5)
    })
    it('should create a new node as the DLL.tail if the list is empty', function() {
      expect(dll.tail.val).to.equal(5)
    })
    it('should create a new node as the DLL.head', function() {
      dll.prepend(10)
      expect(dll.head.val).to.equal(10)
    })
  })

  describe('append()', function() {
    let dll
    before(() => {
      dll = new DLL()
    })
    it('should create a new node as the DLL.head if the list is empty', function() {
      expect(dll.head).to.equal(null)
      dll.append(5)
      expect(dll.head.val).to.equal(5)
    })
    it('should create a new node as the DLL.tail if the list is empty', function() {
      expect(dll.tail.val).to.equal(5)
    })
    it('should create a new node as the DLL.tail', function() {
      dll.append(10)
      expect(dll.tail.val).to.equal(10)
      expect(dll.tail.prev.val).to.equal(5)
    })
  })

  describe('removeFromHead()', function() {
    let dll
    before(() => {
      dll = new DLL()
    })
    it('should return null if the list is empty', function() {
      let val = dll.removeFromHead()
      expect(val).to.equal(null)
    })
    it('should return the value of the dll.head node', function() {
      dll.append(5)
      dll.append(10)
      let val = dll.removeFromHead()
      expect(val).to.equal(5)
    })
    it('should update the new dll.head to the removed nodes next value', function() {
      dll.append(15)
      dll.removeFromHead()
      expect(dll.head.val).to.equal(15)
    })
  })

  describe('removeFromTail()', function() {
    let dll
    before(() => {
      dll = new DLL()
    })
    it('should return null if the list is empty', function() {
      let val = dll.removeFromTail()
      expect(val).to.equal(null)
    })
    it('should return the value of the dll.tail node', function() {
      dll.append(5)
      dll.append(10)
      let val = dll.removeFromTail()
      expect(val).to.equal(10)
    })
    it('should update the new dll.tail to the removed nodes prev value', function() {
      dll.append(15)
      dll.removeFromTail()
      expect(dll.head.val).to.equal(5)
    })
  })

  describe('reverse()', function() {
    let dll
    before(() => {
      dll = new DLL()
      this.dll = dll
    })
    it('should return null if the list is empty', function() {
      let val = dll.reverse()
      expect(val).to.equal(null)
    })
    it('should return the the new dll.head val', function() {
      dll.append(1)
      dll.append(2)
      dll.append(3)
      dll.append(4)
      expect(dll.head.val).to.equal(1)
      let node = dll.reverse()
      expect(node.val).to.equal(4)
    })
    it('should update the dll.tail to the original dll.head', function() {
      expect(dll.tail.val).to.equal(1)
      dll.reverse()
      expect(dll.tail.val).to.equal(4)
    })
  })
})
