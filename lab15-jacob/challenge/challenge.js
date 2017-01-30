'use strict';

let DLL = require('../d-linked');

let list = [1,2,3,4,5];
let dll = new DLL();
list.forEach(function(number) {
  dll.append(number);
}); //Appends the numbers to create a Doubly-linked list

let reverse = module.exports = function reverse(node) {
  let current = node; //current is the input to the function, which in our case will always be the head of the doubly linked list
  let prev = null; //previous to current is null

  while(current) {  //while there is a node to which the loop can iterate...
    let temp = current.next; // temp variable is equal to the node after current
    current.next = prev; //current.next is switched to prev
    current.prev = temp; //current.prev is switched to next
    prev = current; //the previous node is moved up to the current one
    current = temp; //the current node is moved up to the next node -->this allows the while loop to iterate in finite fashion
  }
  return prev;
};

printNext(dll.head);// SHOWS THE LINKED LIST BEFORE REVERSE() RUNS

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const newDll = new DLL();
newDll.head = reverse(dll.head);

function printNext(node) {
  console.log('CUR', node.val);
  console.log('CUR.NEXT', node.next);
  console.log('CUR.PREV', node.prev);

  let next = node.next;
  while(next) {
    console.log('CUR', next.val);
    console.log('CUR.NEXT', next.next && next.next.val);
    console.log('CUR.PREV', next.prev && next.prev.val);
    next = next.next;
  }
}

printNext(newDll.head); //SHOWS THE LINKED LIST AFTER REVERSE() RUNS
