// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


// PseudoCode/plan: 
// create a dummy node to traverse and compare the two linkedLists
// create a head variable to equal the dummy node
// While neither of the values currently being examined in either list == null
// traverse the lists comparing values, the lesser value is appended to the next element in the dummy node
// When the looping through the lists finishes it means one list now === null.
// So, we just have to append the remaining list to the node.
// finally return the head.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const mergeTwoLists = function(list1, list2) {
    let node = new ListNode(null);
    let head = node;
    while (list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            node.next = list1;
            list1= list1.next;
        }
        else{
            node.next = list2;
            list2= list2.next
        }
        node = node.next
    }
    if(list1 !== null) {
        node.next = list1
    } 
    else{
        node.next = list2
    }
    return head.next;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))