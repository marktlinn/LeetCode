/*
Link:
https://leetcode.com/problems/binary-tree-postorder-traversal/description/

Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:
  Input: root = [1,null,2,3]
  Output: [3,2,1]
Example 2:
  Input: root = []
  Output: []
Example 3:
  Input: root = [1]
  Output: [1]
 
Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/*
Pseudocode:
Check the root exists
declare a stack array with initial value of the root
declare a result array to be empty
while the stack's length is greater than 0
  pop the last element of the stack and store in a var: current/node
    unshift the val of the currentNode onto the result
    if the currentNode has a left child push that child onto the stack
    if the currentNode has a right child push that child onto the stack
return the result array
*/

const postorderTraversal = root => {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const current = stack.pop();
    result.unshift(current.val);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};

//This could also be achieved with push and a reverse of the final results, but it's less efficient
// const postorderTraversal = root => {
//   if(!root) return [];

//   const stack = [root];
//   const result = []

//   while(stack.length){
//     const current = stack.pop();
//     result.push(current.val);

//       if(current.left) stack.push(current.left);
//       if(current.right) stack.push(current.right);
//   }
//   return result.reverse();
// };

//Recursive solution
// const postorderTraversal = root => {
//   if (!root) return [];

//   const result = [];

//   const traverse = node => {
//     if (!node) return;
//     result.push(node.val);
//     if (node.left) traverse(node.left);
//     if (node.right) traverse(node.right);
//   };
//   traverse(root);
//   return result;
// };
