#Single and Double-linked Lists

In this implementation of singly- and doubly-linked lists, you can create a list of nodes that either goes one direction (singly-linked) or both directions (doubly-linked), depending on your project's needs and requirements. The nodes can take any kind of value, and there is no datatype validation across nodes.

###Big-O
The Big-O for this implementation is O(n). While many methods are O(1), some such as the Singly-Linked List's removeTail() method, Double-Linked List's reverse() and the print methods require traversing the entirety of the list.

###Singly-Linked Lists
```
Node(value)
```
Each node takes a value and points to the next node in list
```
SinglyLinkedList([optional Array of values])
```
Each list simply points to the head node.
When constructing a new list, you can give an array of values to add to the new list
```
sll.prepend(value)
```
Prepending creates a new node with value and adds to the head
```
sll.append(value)
```
Appending creates a new node with value and adds to end of list. To find end of list, it recursively travels through list.
```
sll.removeHead()
```
As the method implies, this removes reference to the head node so it can be garbage collected, replaces with the node that the previous head points to next, and returns the previous head's value
```
sll.removeTail()
```
This method loops through the list until it finds the second to last node, removes reference to the previous tail so it can be garbage collected, and return the previous tail's value
```
sll.print()
```
Pretty print the list in its current state

###Doubly-linked Lists
```
Node(value)
```
Each node takes a value and points to the next and previous nodes in list
```
DoublyLinkedList([optional Array of values])
```
Each list points to the head and tail nodes.
When constructing a new list, you can give an array of values to add to the new list
```
dll.prepend(value)
```
Prepending creates a new node with value and adds to the head
If this is the first value added to list, it will also point the tail to the same node
```
dll.append(value)
```
Appending creates a new node with value and adds to the head
If this is the first value added to list, it will also point the tail to the same node
```
dll.removeHead()
```
As the method implies, this removes reference to the head node so it can be garbage collected, replaces with the node that the previous head points to next, and returns the previous head's value
```
dll.removeTail()
```
This method loops through the list until it finds the second to last node, removes reference to the previous tail so it can be garbage collected, and return the previous tail's value
```
dll.reverse()
```
This method allows you to flip the list, or reverse the direction of the list, so that the tail becomes the head and vice-versa
Returns the new head node
```
dll.print()
```
Pretty print the list in its current state
