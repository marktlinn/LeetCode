// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
//Output: [5,4,3,2,1]


// A simple linkedList I created to practice this challenge and run logs:
function Node(val,next){
    this.val = val;
    this.next = null
  }  

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next= b;
b.next= c;
c.next= d;


//Actual code assignment:

//pseudoCode/plan:
//The idea is to reverse the list
//To do so we can traverse the list as normal, but reversing the values.
//Create a previous and current variable.
//previous to null and current to the head.
//while current isn't null, loop over the list.
//set current.next to a constant variable to store it's value
// go through the lists setting the nodes in reverse to point backwards with the next values being set to prev
// Effectively making the tail of the node become the head and vice-versa
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function reverseList(head){
    let prev = null;
    let current = head;
    while(current !== null){
        const next  = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
}

//    Null -->   a -->    b    -->   c
//    prev      curr     next

///////__After 1st iteration___\\\\\\\\
//    Null <--  a -->   b    c
//            prev    curr   next
// We're reversing the list, previous is now a, which points to Null as the next value
// current has been reset to b, which still points to c
// and next being set as a constant variable stays one step ahead
// there's now no link between current and next, hence why the constant varibale was necessary

console.log(reverseList(a))