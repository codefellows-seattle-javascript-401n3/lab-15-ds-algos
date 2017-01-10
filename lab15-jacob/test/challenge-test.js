'use strict';

const expect = require('chai').expect;
const DLL = require('../d-linked.js');
const reverse = require('../challenge/challenge');

let listOne = [1,2,3,4,5];
let dll = new DLL();
listOne.forEach(function(number) {
  dll.append(number);
});

let listTwo = [1,2,3,4,5];
let newDll = new DLL();
listTwo.forEach(function(number) {
  newDll.append(number);
});


describe('the reverse function', function() {
  it('should reverse the order of a doubly linked list while preserving the \'next\' pointers', function() {
    let reversedListHead = reverse(dll.head);
    expect(reversedListHead.val).to.equal(5);
    expect(reversedListHead.next.val).to.equal(4);
    expect(reversedListHead.next.next.val).to.equal(3);
    expect(reversedListHead.next.next.next.val).to.equal(2);
    expect(reversedListHead.next.next.next.next.val).to.equal(1);
  });
  it('should correct for the \'prev\' pointers as well', function() {
    let reversedListHeadTwo = reverse(newDll.head);
    expect(reversedListHeadTwo.val).to.equal(5);
    expect(reversedListHeadTwo.prev).to.equal(null);
    expect(reversedListHeadTwo.next.prev.val);
    expect(reversedListHeadTwo.next.next.prev.val).to.equal(4);
    expect(reversedListHeadTwo.next.next.next.prev.val).to.equal(3);
    expect(reversedListHeadTwo.next.next.next.next.prev.val).to.equal(2);
  });
});
