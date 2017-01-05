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
});
