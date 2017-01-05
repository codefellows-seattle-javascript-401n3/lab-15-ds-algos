const expect = require('chai').expect;
const SLL = require('../s-linked.js');

describe('Singly Linked List', function() {
  describe('prepend()', function() {
    it('should create a new node as SLL.head when list is empty', function() {
      let sll = new SLL();
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a new node as SLL.head when there are already nodes in the list', function() {
      let sll = new SLL();
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
      sll.prepend(24);
      expect(sll.head.val).to.equal(24);
    });
    it('should reassign the head to the next value to the new head when a node is prepended', function() {
      let sll = new SLL();
      sll.prepend(25);
      expect(sll.head.next).to.equal(null);
      sll.prepend(24);
      expect(sll.head.next.val).to.equal(25);
    });
  });
  describe('append()', function() {
    it('should add a new node as SLL.head when list is empty', function() {
      let sll = new SLL();
      expect(sll.head).to.equal(null);
      sll.append(25);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a new node after the last node without changing the head', function() {
      let sll = new SLL();
      sll.append(25);
      expect(sll.head.val).to.equal(25);
      sll.append(24);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a next value to the head when a node is appended', function() {
      let sll = new SLL();
      sll.append(25);
      sll.append(24);
      expect(sll.head.next.val).to.equal(24);
    });
  });
  describe ('the removeLast function', function() {
    it('should return the head of a list if there is only one node in the list', function() {
      let sll = new SLL();
      sll.append(25);
      let last = sll.removeLast();
      expect(last).to.equal(25);
      expect(sll.head).to.equal(null);
    });
    it('should return the last node in a list if there is more than one node in the list', function() {
      let sll = new SLL();
      sll.append(25);
      sll.append(24);
      sll.append(23);
      let last = sll.removeLast();
      expect(last).to.equal(23);
    });
    it('should correct the next value of the second to last node after the last node is removed', function() {
      let sll = new SLL();
      sll.append(25);
      sll.append(24);
      expect(sll.head.next.val).to.equal(24);
      let last = sll.removeLast();
      expect(last).to.equal(24);
      expect(sll.head.next).to.equal(null);
    });
  });
  describe('the removeFirst function', function() {
    it('should remove the head and set the list to null if there is only one node in the list', function() {
      let sll = new SLL();
      sll.append(25);
      let first = sll.removeFirst();
      expect(first).to.equal(25);
      expect(sll.head).to.equal(null);
    });
    it('should reassign the second node to the head after the head is removed', function() {
      let sll = new SLL();
      sll.append(25);
      sll.append(24);
      expect(sll.head.val).to.equal(25);
      sll.removeFirst();
      expect(sll.head.val).to.equal(24);
    });
    it('should retain the next values to each node despite resassigning the head', function() {
      let sll = new SLL();
      sll.append(25);
      sll.append(24);
      sll.append(23);
      expect(sll.head.next.val).to.equal(24);
      sll.removeFirst();
      expect(sll.head.next.val).to.equal(23);
    });
  });
});
