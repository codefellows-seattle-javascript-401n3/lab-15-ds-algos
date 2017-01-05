let expect = require('chai').expect;
// let SLL = require('../Single/s-linked');
let DLL = require('../Double/d-linked');

//SLL TESTS
// describe('Singly Linked List', function() {
//
//   //PREPEND TEST
//   describe('prepend()', function() {
//     let sll = new SLL();
//     it('should create a new node as SLL.head when list is empty', function() {
//       expect(sll.head).to.equal(null);
//       sll.prepend(25);
//       expect(sll.head.val).to.equal(25);
//     });
//     it('should add a new node as SLL.head and any existing node will adjust to be .next', function() {
//       expect(sll.head).to.equal(null);
//       sll.prepend(55);
//       expect(sll.head.val).to.equal(55);
//       sll.prepend(44);
//       sll.head.val = 44;
//       expect(sll.head.val).to.equal(44);
//       sll.head.next.val = 55;
//       expect(sll.head.next.val).to.equal(55);
//     });
//     // it('should ')
//   });
//
//   //APPEND TESTS
//   describe('append()', function() {
//     let sll = new SLL();
//     it('should create a new node as SLL.head when list is empty', function() {
//       expect(sll.head).to.equal(null);
//       sll.prepend(25);
//       expect(sll.head.val).to.equal(25);
//     });
//     it('should add a new node after the last node', function() {
//       expect(sll.head).to.equal(null);
//       sll.prepend(25);
//       expect(sll.head.next).to.equal(null);
//       sll.append(42);
//       sll.head.next.val = 42;
//       expect(sll.head.next.val).to.equal(42);
//     });
//     // it('should')
//   });
//
//   //REMOVE FROM HEAD TESTS
//   describe('removeFromHead()', function(){
//     let sll = new SLL();
//     sll.prepend(25);
//     it('should remove a Head node if there is only one node in the list', function(){
//       sll.removeFromHead();
//       expect(sll.head).to.not.be.true;
//     });
//     it('should remove a Head node from a list containing at least 2 nodes and the list will adjust to assign the next node as the new head', function(){
//       sll.prepend(66);
//       sll.prepend(245);
//       expect(sll.head.val).to.equal(245);
//       sll.removeFromHead();
//       expect(sll.head.val).to.equal(66);
//     });
//     it('should return null if there is no head to remove', function(){
//       sll.removeFromHead();
//       expect(null).to.be.null;
//     });
//   });
//   //
//   //     //REMOVE FROM TAIL TESTS
//   describe('removeFromTail', function(){
//     let sll = new SLL();
//     sll.prepend(25);
//     it('should remove a Tail node if there is only one node in the list', function(){
//       sll.removeFromTail();
//       expect(sll.tail).to.not.be.true;
//     });
//     it('should remove a Tail node from a list containing at least 2 nodes and the list will adjust to assign the previous node as the new tail', function(){
//       sll.append(66);
//       sll.append(245);
//       expect(sll.head.next.next.val).to.equal(245);
//       sll.removeFromTail();
//       expect(sll.head.next.val).to.equal(66);
//     });
//     it('should return null if there is no tail to remove', function(){
//       sll.removeFromTail();
//       expect(null).to.be.null;
//     });
//   });



//DLL TESTS

describe('Doubly Linked List', function() {
  describe('prepend()', function() {
      let dll = new DLL();
    it('should create a new node as SLL.head when list is empty', function() {
      expect(dll.head).to.equal(null);
      dll.prepend(25);
      expect(dll.head.val).to.equal(25);
    });
    it('should add a new node as SLL.head and any existing node will adjust to be .next', function() {

    });
    // it('should ')
  });
  describe('append()', function() {
    it('should add a new node as SLL.head when list is empty', function() {

    });
    it('should add a new node after the last node', function() {

    });
    // it('should')
  });
  describe('removeFromHead()', function(){
    it('should', function(){

    })
    it('should', function(){

    })
    it('should', function(){

    })
    describe('removeFromTail', function(){
      it('should', function(){

      })
      it('should', function(){

      })
      it('should', function(){

      })
    })
  })





  //END OF FILE
});
