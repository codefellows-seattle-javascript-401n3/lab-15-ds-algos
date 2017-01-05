'use strict';
let SLL = require('../lib/s-linked.js');
let expect = require('chai').expect;

describe('SinglyLinkedList', function() {
  describe('append()', function() {
    let sll = new SLL();
    let lastNode = null;
    it('should assign a new head when the list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.append(10);
      expect(sll.head.val).to.equal(10);
    });
    it('should assign a value for next on the head when the list contains one node', function() {
      expect(sll.head.next).to.equal(null);
      sll.append(23);
      expect(sll.head.next.val).to.equal(23);
      lastNode = sll.head.next;
    });
    it('should assign the node to the next value of the last item in the list', function() {
      expect(lastNode.next).to.equal(null);
      sll.append(14);
      expect(lastNode.next.val).to.equal(14);
    });
  });
  describe('prepend()', function() {
    let sll = new SLL();
    let prevHead = null;
    it('should assign a new head when the list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(36);
      expect(sll.head.val).to.equal(36);
      prevHead = sll.head;
    });
    it('should assign the previous head as the next value for the new head', function() {
      expect(sll.head).to.equal(prevHead);
      sll.prepend(13);
      expect(sll.head.val).to.equal(13);
      expect(sll.head.next).to.equal(prevHead);
    });
    it('should', function() {
      //
    });
  });
  describe('removeFromHead()',function() {
    it('should return null when there is no head', function() {
      //
    });
    it('should return the value from the head of the list', function() {
      //
    });
    it('should reassign the new head as the previous head.next', function() {
      //  
    });
  });
});