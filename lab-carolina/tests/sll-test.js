'use strict';

const expect = require('chai').expect;
const SLL = require('../lib/sll.js');

describe('Singly Linked List', function() {
  describe('prepend()', function() {
    before( () => { //by doing this, you now have access to SLL inside of the blocks
    let sll = new SLL() //this lets sll be able to be grabbed by line 12.
    })
    it('should create a new node as SLL.head when list is empty', function(){
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);

    });
    it('should add a new node as SLL.head; existing nodes in .next chain', function() {

    });
  });
  describe('append()', function() {
    it('should add a new node as SLL.head when list is empty', function() {

    });
    it('should add a new node after the last node', function() {

    });
  });
});
