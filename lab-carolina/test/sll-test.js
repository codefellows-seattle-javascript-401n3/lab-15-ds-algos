'use strict';

const expect = require('chai').expect;
const SLL = require('../lib/sll.js');

describe('Singly Linked List', function() {
  describe('testing prepend() method', function() {
    let sll;
    before( () => { //by doing this, you now have access to SLL inside of the blocks
      sll = new SLL(); //this lets sll be able to be grabbed by line 12.
    });
    it('should create a new node as SLL.head when list is empty', function(){
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
    });

    it('should reassign head value when node with prepend()', function(){
      expect(sll.head.val).to.equal(25);
      sll.prepend(24);
      expect(sll.head.val).to.equal(24);
    });

    it('should make current head the next value for the new node', function() {
      expect(sll.head.val).to.equal(24);
      sll.prepend(23);
      expect(sll.head.next.val).to.equal(24);
    });
  });

  describe('testing append() method', function() {
    let sll;
    before( () => {
      sll = new SLL();
    });

    it('should add a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.append(1);
      expect(sll.head.val).to.equal(1);
    });

    it('should add a new node after the last node', function() {
      expect(sll.head.val).to.equal(1);
      sll.append(2);
      expect(sll.head.next.val).to.equal(2);
    });

    it('should assign new node next to null', function(){
      expect(sll.head.next.next).equal(null);
    });
  });

  describe('testing removeFromHead() method', function() {
    let sll;
    before( () => {
      sll = new SLL();
    });

    it('should reassign head.next to head', function(){
      expect(sll.head).to.equal(null);
      sll.append(2);
      sll.append(3);
      expect(sll.head.val).to.equal(2);
      expect(sll.head.next.val).to.equal(3);
      sll.removeFromHead();
      expect(sll.head.val).to.equal(3);
    });

    it('should reassign the new node.next value', function(){
      expect(sll.head.val).to.equal(3);
      sll.append(4);
      sll.append(5);
      expect(sll.head.next.val).to.equal(4);
      sll.removeFromHead();
      expect(sll.head.val).to.equal(4);
      expect(sll.head.next.val).to.equal(5);
    });

    it('should return an empty list once all nodes are removed', function(){
      expect(sll.head.val).to.equal(4);
      sll.removeFromHead();
      sll.removeFromHead();
      expect(sll.head).to.equal(null);
    });
  });

  describe('testing removeLastNode() method', function() {
    let sll;
    before( () => {
      sll = new SLL();
    });

    it('should return null if the list is empty', function(){
      expect(sll.head).to.equal(null);
    });

    it('should remove last node added', function(){
      expect(sll.head).to.equal(null);
      sll.append(1);
      sll.append(2);
      expect(sll.head.val).to.equal(1);
      expect(sll.head.next.val).to.equal(2);
      sll.removeLastNode();
      expect(sll.head.val).to.equal(1);
      expect(sll.head.next).to.equal(null);
    });

    it('should return the removed node', function(){
      sll.append(2);
      expect(sll.removeLastNode()).to.equal(2);
    });

  });
});
