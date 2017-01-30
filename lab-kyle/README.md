# Data Structures and Algorithms - linked Lists

This project implements two linked lists; a single-linked list and a doubly-linked list.
Each version of the list shares the **append**, **prepend**, **removeFromHead**, and
**removeFromTail** methods. The doubly-linked list has an additional method called
**reverse**. Each list implements its own version of a node. Testing is done using mocha
and gulp.

## single-linked list

- single-linked lists only have a reference to the head node. When creating a new
  single-linked list you may pass in an array of values.

  ```javascript
  const SinglyLinkedList = function(arr) {
    this.head = null
    if (Array.isArray(arr)) arr.forEach(val => this.append(val)) // lets you pass in an array of values
  }

  let SLL = new SinglyLinkedList() // will instantiate an empty list

  let SLL = new SinglyLinkedList([1, 2, 3, 4]) // will instantiate a list with four nodes
  ```

### single node

  - an object with the properties of **val** and **next**, next being the next node
    in the list. **NOTE** next defaults to `null`.

  ```javascript
  let Node = function(val) {
    this.val = val
    this.next = null
  }
  ```

### methods

  - append - will add a node to the back of the list
  - complexity: O(1)

  ```javascript
  SLL.append(3)

  // returns
  {
    value: 3
    next: null
  }
  ```

  - prepend - will add a node to the front of the list
  - complexity: O(1)

  ```javascript
  SLL.prepend(4)

  // returns
  {
    value: 4
    next: { value: 3, next: null}
  }
  ```

  - removeFromHead - will remove the node from the head of the list and return its value
  - complexity: O(1)

  ```javascript
  SLL.removeFromHead()

  // returns
  {
    value: 4
    next: { value: 3, next: null}  
  }
  ```


  - removeLastNode - will remove the node from the tail of the list and return its value
  - complexity: O(n)

  ```javascript
  SLL.removeLastNode()

  // returns
  {  
    value: 3
    next: null
  }
  ```

## double-linked list

  - double-linked lists have a reference to both the head and the tail node. When creating
    a new double-linked list you may pass in an array of values.

  ```javascript
  const DoublyLinkedList = function(arr) {
    this.head = null
    if (Array.isArray(arr)) arr.forEach(val => this.append(val)) // lets you pass in an array of values
  }

  let DLL = new DoublyLinkedList() // will instantiate an empty list

  let DLL = new DoublyLinkedList([1, 2, 3, 4]) // will instantiate a list with four nodes
  ```


### double node

  - an object with the properties **val**, **next**, and **prev**. `next` refers
    to the next node while `prev` refers to the previous node.
    **NOTE** next and prev default to `null`.

  ```javascript
  let Node = function(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
  ```

### methods

  - append - will add a node to the back of the list
  - complexity: O(1)

  ```javascript
  dll.append(5)

  // returns
  {
    val: 5
    prev: null
    next: null
  }
  ```

  - prepend - will add a node to the front of the list
  - complexity: O(1)

  ```javascript
  dll.prepend(2)

  // returns
  {
    val: 2
    prev: null
    next: { val: 5, prev: {val: 2, /* etc */}, next: null}
  }
  ```

  - removeFromHead - will remove the head node of the list and return its value
  - complexity: O(1)

  ```javascript
  dll.removeFromHead() // returns 2
  ```  

  - removeFromTail - will remove the tail node from the list and return its value
  - complexity: O(1)

  ```javascript
  dll.removeFromTail() // returns 5
  ```

  - reverse - will reverse the nodes in the list and return the new head node
  - complexity: O(n)

  ```javascript
  // given a double-linked list with four nodes that have the values 1-4

  dll.reverse()

  // returns
  {
    val: 1
    prev: null
    next: {/* next node */}
  }
  ```
