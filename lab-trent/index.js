const DLL = require('./lib/d-linked');

let dll = new DLL();

dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);
dll.append(6);
dll.append(7);
dll.append(8);
dll.append(9);
dll.append(10);

let itr = dll.head;
while(itr) {
  console.log(itr.val);
  itr = itr.next;
}

console.log('reversing');
dll.reverse();

itr = dll.head;
while(itr) {
  console.log(itr.val);
  itr = itr.next;
}
