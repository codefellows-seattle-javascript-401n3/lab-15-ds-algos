'use strict';
let SLL = require('../lib/s-linked.js');
let expect = require('chai').expect;

describe('SinglyLinkedList', function() {
  describe('append()', function() {
    let sll = new SLL();
    it('should assign a new head when the list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.append(10);
      expect(sll.head.val).to.equal(10);
    });
    it('should assign a value for next on the head when the list contains one node', function() {
      expect(sll.head.next).to.equal(null);
      sll.append(23);
      expect(sll.head.next.val).to.equal(23);
    });
  });
});