/*
Link:
https://leetcode.com/problems/remove-duplicates-from-sorted-list/

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
  Input: head = [1,1,2]
  Output: [1,2]

Example 2:
  Input: head = [1,1,2,3,3]
  Output: [1,2,3]
 
Constraints:
  The number of nodes in the list is in the range [0, 300].
  -100 <= Node.val <= 100
  The list is guaranteed to be sorted in ascending order.
*/

/*
Pseudocode:
Create a pointer to use to traverse the linked-list
while there is a current node and also a next node to compare to
  check if the value in the current node === the value in the next node
    if so
      make the currentNode.next -> point to the node after i.e. currenNode.next.next (this skips the next node which was equal)
    else
      continue traversing the the linkedList
      set current to current.next
return the head of the list.
*/

function deleteDuplicates(head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
