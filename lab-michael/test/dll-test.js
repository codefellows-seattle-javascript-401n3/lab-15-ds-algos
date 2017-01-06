'use strict';
const expect = require('chai').expect;
const DLL = require('../d-link/d-linked');

describe('Double Linked List', function() {
  describe('prepend()', function() {
    let dll;
    before(() => {
      dll = new DLL();
    });

    it('should create a new node as SLL.head when list is empty', function() {
      expect(dll.head).to.equal(null);
      dll.prepend(25);
      expect(dll.head.val).to.equal(25);
      dll.head.val = null;
    });
    it('should add a new node as SLL.head; existing nodes in .next chain', function() {

    });
  });
  describe('append()', function() {

  });
  describe('reverse()', function() {
    let dll;
    before(() => {
      dll = new DLL();
    });

    it('should reverse the head and tail', function() {
      dll.append(3);
      dll.append(2);
      dll.append(1);
      expect(dll.head.val).to.equal(3);
      expect(dll.tail.val).to.equal(1);
      dll.reverse();
      expect(dll.head.val).to.equal(1);
      expect(dll.tail.val).to.equal(3);
    });
  });

});