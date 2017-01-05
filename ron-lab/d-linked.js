module.exports = function(val) {
  this.val = val
  this.prev = null
  this.next = null
}

DoublyLinked.prototype.prepend = function(val) {
  let node = new Node(val)

  if(!this.head) {
    this.head = node
    this.tail = node
    return node.val
  }

  node.next = this.head
  this.head.prev = node
  this.head = node
  return node.val
}

DoublyLinked.prototype.apppend = function(val) {
  let node = new Node

  if (!this.tail) {
    this.head = node
    this.tail = node
    return node.val
  }

  node.prev = this.tail
  this.tail.next = node
  this.tail = node
  return node.val
}
//(HEAD)[val, next] => [val, next] => [val, next] => [val, next](TAIL)
//prepend
