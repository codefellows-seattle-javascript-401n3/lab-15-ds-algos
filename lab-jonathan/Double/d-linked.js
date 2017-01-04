let Node = require('./node');

let DoublyLinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    return node.val;
  }

  node.next = this.head;
  this.head.prev = node;
  this.head = node;
  return node.val;
};

DoublyLinkedList.prototype.append = function(val) {
  let node = new Node(val);

  if (!this.tail) {
    this.head = node;
    this.tail = node;
    return node.val;
  }

  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return node.val;
};

DoublyLinkedList.prototype.removeFromHead = function(){
  if(!head) return null;
  if(!this.head.next){
    let nodeHead = this.head;
    this.head = null;
    return nodeHead;
  }
  let val = this.head.val;
  this.head = this.head.next;
  return val;
};

DoublyLinkedList.prototype.removeFromTail = function(){
  if(!tail){
    return null;
  }
  if(!this.tail.prev){
    let nodeTail = this.tail;
    this.tail = null;
    return nodeTail;
  }
  let val = this.tail.val;
  this.tail = this.tail.prev;
  this.tail.next = null;
  return val;
};

DoublyLinkedList.prototype.reverse = function(){
  if(!head){
    return null;
  }
  if(!tail){
    return null;
  }
  let tempHead = this.head.val;
  let tempTail = this.tail.val;
  //swap head and tail
  this.tail.val = tempHead;
  this.head.val = tempTail;
  while(tempHead.next)
    if(!tempHead.next.next){
      return;
    } else {
      let tempNext = this.next;
      let tempPrev = this.prev;
      this.next = tempPrev;
      this.prev = tempNext;
    }
  console.log(this.head.val);
  console.log(this.tail.val);

};

// (HEAD)[val, prev, next] <=> [val, prev, next] <=> [val, prev, next](TAIL)
// Prepend()                                                     Append()
