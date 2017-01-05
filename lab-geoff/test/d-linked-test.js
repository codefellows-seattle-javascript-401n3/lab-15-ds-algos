'use strict';
let DLL = require('../lib/d-linked.js');
let expect = require('chai').expect;

describe('doubly linked list', function() {
  describe('reverse()', function() {
    it('should reverse the head and tail', function() {
      let dll = new DLL();
      dll.append(1);
      dll.append(2);
      dll.append(3);
      dll.append(4);
      dll.append(5);
      expect(dll.head.val).to.equal(1);
      expect(dll.tail.val).to.equal(5);
      dll.reverse();
      expect(dll.head.val).to.equal(5);
      expect(dll.tail.val).to.equal(1);
    });
  });
});