let expect = require('chai').expect;
let DLL = require('./d-linked');
let Node = require('./node');


//DLL TESTS
describe('Doubly Linked List', function() {
  describe('prepend()', function() {
    before(() => {
      let dll = new DLL();
    });
    it('should create a new node as SLL.head when list is empty', function() {
      expect(dll.head).to.equal(null);
      dll.prepend(25);
      expect(dll.head.val).to.equal(25);
    });
    it('should add a new node as SLL.head and any existing node will adjust to be .next', function() {

    });
    it('should ')
  });
  describe('append()', function() {
    it('should add a new node as SLL.head when list is empty', function() {

    });
    it('should add a new node after the last node', function() {

    });
    it('should')
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
