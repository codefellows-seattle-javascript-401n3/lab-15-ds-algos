**Third Data Structures and Algorithms Lab**

This Lab contains three main Components:
- a simulation of a single-linked list
- a simulation of doubly-linked list
- a coding challenge where a function is used to reverse the order of a doubly linked list.


PART 1: SINGLY-LINKED LIST   

Since linked-lists are not an inherent data structure in JavaScript (like objects), we are simulating a singly linked list with an object in this instance.

In our singly-linked list simulation, all we have is a .head and .next property to our list. The list is only aware of the value of the head and the value of the next node. The methods that can be called on our linked linked list are:

  - append() - adding a node to the back
  - prepend() adding a node to the back
  - removeFirst() - removing a node from the front (and returning its value)
  - removeLast() - removes a node from the end of the list (and returns its value). This is the most complicated method because it involves recursive traversal of the whole linked list until the iterator ends up on the last node.


PART 2: DOUBLY-LINKED LIST:

Same thing as the singly-linked list, except for a doubly-linked list, the list has a .tail property which identifies the end of the list. Also, each node within the list has a .next (which identifies the next node) AND a .prev (which identifies the previous node), hence the name "doubly-linked". The methods that can be called on our Doubly-linked list are the same as the above, and the removeLast() is much simpler since we don't need to traverse!

PART 3: REVERSE REVERSE!

This method was our coding challenge and if you look into the JS file for the challenge itself, you'll see step by step comments of what exactly is happening to the list.

Instead of recursion, I used a while loop since I thought it would be more simple for my feeble mind. In this function, outside of the while loop we assign a temporary variable to the current node (which will iterate), and another temp variable to the node previous to the current. Within the while loop we assign yet another temp variable to the NEXT value of the current node, and then we swap the previous and next values of the current node, and assign the current node to the next one, and the previous node to what was formerly the current node and do the same thing. over again until there is no current code off of which to work.

It is a bit complicated to explain without seeing any code so I encourage you to look at the code itself and see line by line what is done in this process

WHAT ABOUT THE BIG O NOTATION YOU ASK?

The reverse method has a Big O runtime of O(n) (linear) because it will only take as long as there are nodes in the list. thinking back to college calculus- I would say that the rate of change is constant, and the rate of acceleration is zero.

I would think that the Big O memory use of this function is also O(n) because the computer only needs to remember as many nodes as there are the size of this list (multiplied by a constant since with each node there is a val, next, and prev). I might be tempted to say the Big O memory is constant because a DLL only knows it's head, tail and respective pointers regardless of the size, but the inner values are still accessible by using .next.next.next and so on so I think it would be misleading to say that only the head and tail are in memory despite that being the only values you can immediately see when looking at the list itself. 
