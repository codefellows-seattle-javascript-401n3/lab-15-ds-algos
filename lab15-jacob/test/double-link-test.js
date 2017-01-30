const expect = require('chai').expect;
const DLL = require('../d-linked.js');

describe('Doubly Linked List', function() {
  describe('prepend()', function() {
    it('should create a new node as dll.head and dll.tail when list is empty', function() {
      let dll = new DLL();
      expect(dll.head).to.equal(null);
      expect(dll.tail).to.equal(null);
      dll.prepend(25);
      expect(dll.head.val).to.equal(25);
      expect(dll.tail.val).to.equal(25);
    });
    it('should add a new node as dll.head when there are already nodes in the list', function() {
      let dll = new DLL();
      dll.prepend(25);
      expect(dll.head.val).to.equal(25);
      dll.prepend(24);
      expect(dll.head.val).to.equal(24);
    });
    it('should reassign the head to the next value to the new head when a node is prepended', function() {
      let dll = new DLL();
      dll.prepend(25);
      expect(dll.head.next).to.equal(null);
      dll.prepend(24);
      expect(dll.head.next.val).to.equal(25);
    });
  });
  describe('append()', function() {
    it('should add a new node as dll.head and dll.tail when list is empty', function() {
      let dll = new DLL();
      expect(dll.head).to.equal(null);
      expect(dll.tail).to.equal(null);
      dll.append(25);
      expect(dll.head.val).to.equal(25);
      expect(dll.tail.val).to.equal(25);
    });
    it('should should assign previous and next values when enough nodes are added', function() {
      let dll = new DLL();
      dll.append(25);
      dll.append(24);
      dll.append(23);
      expect(dll.tail.prev.val).to.equal(24);
      expect(dll.head.next.val).to.equal(24);
    });
    it('should make a new tail value each time a node is appended', function() {
      let dll = new DLL();
      dll.append(25);
      expect(dll.tail.val).to.equal(25);
      dll.append(24);
      expect(dll.tail.val).to.equal(24);
    });
  });
  describe ('the removeLast function', function() {
    it('should return the head of a list if there is only one node in the list and the nullify the head and tail', function() {
      let dll = new DLL();
      dll.append(25);
      let last = dll.removeLast();
      expect(last).to.equal(25);
      expect(dll.head).to.equal(null);
      expect(dll.tail).to.equal(null);
    });
    it('should reassign the tail and the previous to the tail after the last node is removed', function() {
      let dll = new DLL();
      dll.append(25);
      dll.append(24);
      dll.append(23);
      dll.removeLast();
      expect(dll.tail.val).to.equal(24);
      expect(dll.tail.prev.val).to.equal(25);
    });
    it('should correct the next value of the second to last node after the last node is removed', function() {
      let dll = new DLL();
      dll.append(25);
      dll.append(24);
      expect(dll.head.next.val).to.equal(24);
      let last = dll.removeLast();
      expect(last).to.equal(24);
      expect(dll.head.next).to.equal(null);
    });
  });
  describe ('the removeFirst function', function() {
    it('should return the head of a list if there is only one node in the list and the nullify the head and tail', function() {
      let dll = new DLL();
      dll.append(25);
      let first = dll.removeFirst();
      expect(first).to.equal(25);
      expect(dll.head).to.equal(null);
      expect(dll.tail).to.equal(null);
    });
    it('should reassign the head and the next to the head after the first node is removed', function() {
      let dll = new DLL();
      dll.append(25);
      dll.append(24);
      dll.append(23);
      dll.removeFirst();
      expect(dll.head.val).to.equal(24);
      expect(dll.head.next.val).to.equal(23);
    });
    it('should correct the previous value of the second node after the first node is removed', function() {
      let dll = new DLL();
      dll.append(25);
      dll.append(24);
      expect(dll.tail.prev.val).to.equal(25);
      let first = dll.removeFirst();
      expect(first).to.equal(25);
      expect(dll.head.prev).to.equal(null);
    });
  });
});
