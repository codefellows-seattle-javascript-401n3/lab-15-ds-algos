# Data Structures and Algorithms - linked Lists

This project implements two linked lists; a single-linked list and a doubly-linked list.
Each version of the list shares the **append**, **prepend**, **removeFromHead**, and
**removeFromTail** methods. The doubly-linked list has an additional method called
**reverse**. Each list implements its own version of a node. Testing is done using mocha
and gulp.

## single-linked list

### single node

  - an object with the properties of **val** and **next**, next being the next node
    in the list. **NOTE** next defaults to `null`.

### methods

  - append
    - will add a node to the back of the list

  - prepend
    - will add a node to the front of the list

  - removeFromHead
    - will remove the node from the head of the list and return its value

  - removeFromTail
    - will remove the node from the tail of the list and return its value


## double-linked list

### double node

  - an object with the properties **val**, **next**, and **prev**. `next` refers
    to the next node while `prev` refers to the previous node.
    **NOTE** next and prev default to `null`.

### methods

  - append
    - will add a node to the back of the list

  - prepend
    - will add a node to the front of the list

  - removeFromHead
    - will remove the head node of the list and return its value

  - removeFromTail
    - will remove the tail node from the list and return its value

  - reverse
    - will reverse the nodes in the list and return the new head node
