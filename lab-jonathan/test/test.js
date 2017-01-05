let expect = require('chai').expect;
let SLL = require('../Single/s-linked');
let DLL = require('../Double/d-linked');

//SLL TESTS
describe('Singly Linked List', function() {


//PREPEND TEST
  describe('prepend()', function() {
    let sll = new SLL();
    it('should create a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a new node as SLL.head and any existing node will adjust to be .next', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(55);
      expect(sll.head.val).to.equal(55);
      sll.prepend(44);
      sll.head.val = 44;
      expect(sll.head.val).to.equal(44);
      sll.head.next.val = 55;
      expect(sll.head.next.val).to.equal(55);
    });
    // it('should ')
  });
//
//APPEND TESTS
  describe('append()', function() {
    let sll = new SLL();
    it('should create a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a new node after the last node', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.next).to.equal(null);
      sll.append(42);
      sll.head.next.val = 42;
      expect(sll.head.next.val).to.equal(42);
    });
    // it('should')
  });
  //
//REMOVE FROM HEAD TESTS
  describe('removeFromHead()', function(){
    let sll = new SLL();
    sll.prepend(25);
    it('should remove a Head node if there is only one node in the list', function(){
      sll.removeFromHead();
      expect(sll.head).to.not.be.true;
    });
    it('should remove a Head node from a list containing at least 2 nodes and the list will adjust to assign the next node as the new head', function(){
      sll.prepend(66);
      sll.prepend(245);
      expect(sll.head.val).to.equal(245);
      sll.removeFromHead();
      expect(sll.head.val).to.equal(66);
    });
    it('should return null if there is no head to remove', function(){
      sll.removeFromHead();
      expect(null).to.be.null;
    });
  });

 //REMOVE FROM TAIL TESTS
  describe('removeFromTail', function(){
    let sll = new SLL();
    sll.prepend(25);
    it('should remove a Tail node if there is only one node in the list', function(){
      sll.removeFromTail();
      expect(sll.tail).to.not.be.true;
    });
    it('should remove a Tail node from a list containing at least 2 nodes and the list will adjust to assign the previous node as the new tail', function(){
      sll.append(66);
      sll.append(245);
      expect(sll.head.next.next.val).to.equal(245);
      sll.removeFromTail();
      expect(sll.head.next.val).to.equal(66);
    });
    it('should return null if there is no tail to remove', function(){
      sll.removeFromTail();
      expect(null).to.be.null;
    });
  });
});



//DLL TESTS

describe('Doubly Linked List', function() {

  //DLL PREPEND TESTS
  describe('prepend()', function() {
    let dll = new DLL();
    // it('should create a new node as SLL.head when list is empty', function() {
    //   expect(dll.head).to.equal(null);
    //   dll.prepend(25);
    //   expect(dll.head.val).to.equal(25);
    // });
    it('should add a new node as SLL.head and any existing node will adjust to be .next', function() {
      expect(dll.head).to.equal(null);
      dll.prepend(55);
      expect(dll.head.val).to.equal(55);
      dll.prepend(44);
      dll.head.val = 44;
      expect(dll.head.val).to.equal(44);
      dll.head.next.val = 55;
      expect(dll.head.next.val).to.equal(55);
    });
    // it('should ')
  });

  //DLL APPEND TESTS
  describe('append()', function() {
    let dll = new DLL();
    it('should create a new node as SLL.head when list is empty', function() {
      expect(dll.head).to.equal(null);
      dll.prepend(25);
      expect(dll.head.val).to.equal(25);
    });
    it('should add a new node after the last node', function() {
      expect(dll.head.next).to.equal(null);
      dll.append(42);
      dll.head.next.val = 42;
      expect(dll.head.next.val).to.equal(42);
    });
    // it('should')
  });

  //DLL REMOVE FROM HEAD TESTS
  describe('removeFromHead()', function(){
    let dll = new DLL();
    dll.prepend(25);
    it('should remove a Head node if there is only one node in the list', function(){
      dll.removeFromHead();
      expect(dll.head).to.not.be.true;
    });
    it('should remove a Head node from a list containing at least 2 nodes and the list will adjust to assign the next node as the new head', function(){
      dll.prepend(66);
      dll.prepend(245);
      expect(dll.head.val).to.equal(245);
      dll.removeFromHead();
      expect(dll.head.val).to.equal(66);
    });
    it('should return null if there is no head to remove', function(){
      dll.removeFromHead();
      expect(null).to.be.null;
    });
  });

  //DLL REMOVE FROM TAIL TESTS
  describe('removeFromTail', function(){
    let dll = new DLL();
    dll.prepend(25);
    it('should remove a Tail node if there is only one node in the list', function(){
      dll.removeFromTail();
      expect(dll.tail).to.not.be.true;
    });
    it('should remove a Tail node from a list containing at least 2 nodes and the list will adjust to assign the previous node as the new tail', function(){
      dll.append(66);
      dll.append(245);
      expect(dll.tail.val).to.equal(245);
      dll.removeFromTail();
      expect(dll.tail.val).to.equal(66);
    });
    it('should return null if there is no tail to remove', function(){
      dll.removeFromTail();
      expect(null).to.be.null;
    });
  });

  //DLL REVERSE TESTS
  describe('reverse()', function(){
    let dll = new DLL();
    dll.prepend(25);
    dll.prepend(66);
    dll.prepend(88);
    dll.prepend(42);
    it('should switch the current head and tail nodes', function(){
      expect(dll.head.val).to.equal(42);
      expect(dll.tail.val).to.equal(25);
      dll.reverse();
      expect(dll.head.val).to.equal(25);
      expect(dll.tail.val).to.equal(42);
    });
    it('should swap existing nodes previous and next', function(){
      expect(dll.head.next.val).to.equal(88);
      expect(dll.tail.prev.val).to.equal(66);
      dll.reverse();
      expect(dll.head.next.next.val).to.equal(66);
      expect(dll.tail.prev.prev.val).to.equal(88);
    });
    it('should return null if the list is empty', function(){
      let empty = new DLL();
      empty.reverse();
      expect(null).to.be.null;
    });
  });

  //END OF FILE
});
