'use strict';
const expect = require('chai').expect;
const SLL = require('../s-link/s-linked');

describe('Single Linked List', function() {
  describe('prepend()', function() {
    let sll;
    before(() => {
      sll = new SLL();
    });
    it('should create a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a new node as SLL.head; existing nodes in .next chain', function() {
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
      sll.prepend(24);
      expect(sll.head.val).to.equal(24);
    });
    it('should reassign the head to the .next val to the new head when a node is prepended', function() {
      let sll = new SLL();
      sll.prepend(25);
      expect(sll.head.next).to.equal(null);
      sll.prepend(24);
      expect(sll.head.next.val).to.equal(25);
    });
  });
  describe('append()', function() {
    let sll;
    before(() => {
      sll = new SLL();
    });
    it('should add a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.append(25);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a new node after the last node', function() {
      sll.append(25);
      expect(sll.head.val).to.equal(25);
      sll.append(24);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a next value to the head when a node is appended', function() {
      sll.append(24);
      sll.append(25);
      expect(sll.head.next.val).to.equal(25);
    });
  });
});