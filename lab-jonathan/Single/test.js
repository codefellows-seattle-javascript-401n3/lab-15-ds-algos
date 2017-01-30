let expect = require('chai').expect;
let SLL = require('../Single/s-linked');
// let Node = require('./node');
// let DLL = require('../Double/d-linked');

//SLL TESTS
describe('Singly Linked List', function() {
  describe('prepend()', function() {
      let sll = new SLL();
      console.log(sll);
    it('should create a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
    });
    before(() => {
      let sll = new SLL();
      sll.prepend(44);
    });
    it('should add a new node as SLL.head and any existing node will adjust to be .next', function() {
      let node = new Node(val);
      node.prepend(25); //this adds the new node to the front of the list
      this.head = node;
      expect(node.next.val).to.equal(44);

    });
    it('should ')
  });

  //APPEND TESTS
  describe('append()', function() {
    before(() => {
      let sll = new SLL();
    });
    it('should create a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.val).to.equal(25);
    });
    it('should add a new node after the last node', function() {
      expect(sll.head).to.equal(null);
      sll.prepend(25);
      expect(sll.head.next).to.not.be.true;
      sll.append(42);
      expect(sll.head.next).to.equal(42);
    });
    it('should')
  });

  //REMOVE FROM HEAD TESTS
  describe('removeFromHead()', function(){
    before(() => {
      let sll = new SLL();
      sll.prepend(25); //something is in the list
    });
    it('should remove a Head node if there is only one node in the list', function(){
      sll.removeFromHead();
      expect(sll.head).to.not.be.true;
    });
    it('should remove a Head node from a list containing at least 2 nodes and the list will adjust to assign the next node as the new head', function(){
      sll.prepend(66);
      sll.prepend(245);
      expect(sll.head.val).to.equal(25);
      sll.removeFromHead();
      expect(sll.head.val).to.equal(66);
    });
    it('should return null if there is no head to remove', function(){
      sll.removeFromHead();
      expect(null).to.be.null;
    });

      //REMOVE FROM TAIL TESTS
    describe('removeFromTail', function(){
      before(() => {
        let sll = new SLL();
        sll.prepend(25); //something is in the list
      });
      it('should remove a Tail node if there is only one node in the list', function(){
        sll.removeFromTail();
        expect(sll.tail).to.not.be.true;
      });
      it('should remove a Tail node from a list containing at least 2 nodes and the list will adjust to assign the previous node as the new tail', function(){
        sll.append(66);
        sll.append(245);
        expect(sll.tail.val).to.equal(245);
        sll.removeFromTail();
        expect(sll.tail.val).to.equal(66);
      });
      it('should return null if there is no tail to remove', function(){
        sll.removeFromTail();
        expect(null).to.be.null;
      });
    });
  });

});
