
'use strict';

const expect = require('chai').expect;
const DLL = require('../lib/dll.js');

describe('Doubly Linked List', function() {
  describe('testing prepend() method', function() {
    let dll;

    before(() => {
      dll = new DLL();
    });

    it('should assign new node as head and tail to an empty list', function() {
      expect(dll.head).to.equal(null);
      dll.prepend(10);
      expect(dll.head.val).to.equal(10);
      expect(dll.tail.val).to.equal(10);
    });

    it('should make current node the new node next', function() {
      expect(dll.head.val).to.equal(10);
      dll.prepend(9);
      expect(dll.head.next.val).to.equal(10);
    });

    it('should reassign current node previous to new node', function() {
      expect(dll.head.val).to.equal(9);
      dll.prepend(8);
      expect(dll.head.next.prev.val).to.equal(8);
    });
  });

  describe('testing append() method', function() {
    let dll;

    before(() => {
      dll = new DLL();
    });

    it('should assign new node as head and tail to an empty list', function() {
      expect(dll.head).to.equal(null);
      dll.append(1);
      expect(dll.head.val).to.equal(1);
      expect(dll.tail.val).to.equal(1);
    });


    it('should make current new node previous and make new node the tail', function() {
      expect(dll.tail.val).to.equal(1);
      dll.append(2);
      expect(dll.tail.prev.val).to.equal(1);
      expect(dll.tail.val).to.equal(2);
    });

    it('should give then val of the newly appended node', function() {
      dll.append(3);
      expect(dll.tail.val).to.equal(3);
    });
  });

  describe('testing removeFromHead() method', function() {
    let dll;

    before(() => {
      dll = new DLL();
    });

    it('should return null if list is empty', function() {
      expect(dll.head).to.equal(null);
      expect(dll.tail).to.equal(null);
      dll.append(11);
      expect(dll.head.val).to.equal(11);
      expect(dll.tail.val).to.equal(11);
      dll.removeFromHead();
      expect(dll.head).to.equal(null);
      expect(dll.tail).to.equal(null);
    });

    it('should make current node.next as new head once current head is removed', function() {
      dll.append(10);
      dll.append(11);
      expect(dll.head.next.val).to.equal(11);
      dll.removeFromHead();
      expect(dll.head.val).to.equal(11);
    });

    it('should reassign the next and previous values', function() {
      dll.append(5);
      dll.append(6);
      expect(dll.head.val).to.equal(11);
      expect(dll.head.prev).to.equal(null);
      expect(dll.head.next.val).to.equal(5);
      dll.removeFromHead();
      expect(dll.head.val).to.equal(5);
      expect(dll.head.next.val).to.equal(6);
      expect(dll.head.prev).to.equal(null);
    });
  });

  describe('testing removeFromTail() method', function() {
    let dll;

    before(() => {
      dll = new DLL();
    });

    it('should return null when list is empty', function() {
      expect(dll.head).to.equal(null);
      expect(dll.tail).to.equal(null);
      dll.append(1);
      expect(dll.tail.val).to.equal(1);
      expect(dll.head.val).to.equal(1);
      dll.removeFromTail();
      expect(dll.tail).to.equal(null);
      expect(dll.head).to.equal(null);
    });

    it('should reassign current tail.prev as new tail once current tail is removed', function() {
      dll.append(1);
      dll.append(2);
      expect(dll.tail.val).to.equal(2);
      expect(dll.tail.prev.val).to.equal(1);
      dll.removeFromTail();
      expect(dll.tail.val).to.equal(1);
    });

    it('should reassign the new tail next and prev values once current tail is removed', function() {
      expect(dll.tail.val).to.equal(1);
      dll.append(2);
      dll.append(3);
      expect(dll.tail.val).to.equal(3);
      expect(dll.tail.next).to.equal(null);
      expect(dll.tail.prev.val).to.equal(2);
      dll.removeFromTail();
      expect(dll.tail.val).to.equal(2);
      expect(dll.tail.prev.val).to.equal(1);
      expect(dll.tail.next).to.equal(null);
    });
  });

  describe('testing reverse() method', function(){
    let dll;
    before(() => {
      dll = new DLL();
    });

    it('should return null if the list is empty', function(){
      expect(dll.head).to.equal(null);
    });

    it('should reverse the order of nodes', function(){
      dll.append(1);
      dll.append(2);
      dll.append(3);
      dll.reverse();
      expect(dll.head.val).to.equal(3);
      expect(dll.tail.val).to.equal(1);
      expect(dll.head.next.val).to.equal(2);
      expect(dll.head.next.next.val).to.equal(1);
      expect(dll.tail.prev.val).to.equal(2);
      expect(dll.tail.prev.prev.val).to.equal(3);
      expect(dll.head.prev).to.equal(null);
      expect(dll.tail.next).to.equal(null);
    });

    it('should re-reverse the order if called again', function(){
      expect(dll.head.val).to.equal(3);
      expect(dll.tail.val).to.equal(1);
      dll.reverse();
      expect(dll.head.val).to.equal(1);
      expect(dll.tail.val).to.equal(3);
      expect(dll.head.next.val).to.equal(2);
      expect(dll.tail.prev.val).to.equal(2);
      expect(dll.head.next.next.val).to.equal(3);
      expect(dll.tail.prev.prev.val).to.equal(1);
    });

  });

});
