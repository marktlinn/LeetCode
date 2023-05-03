/*
Link:
https://leetcode.com/problems/binary-tree-preorder-traversal/description/
Given the root of a binary tree, return the preorder traversal of its nodes' values.
Example 1:
  Input: root = [1,null,2,3]
  Output: [1,2,3]
Example 2:
  Input: root = []
  Output: []
Example 3:
  Input: root = [1]
  Output: [1]
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/*
Pseudocode:
***Traverse the binary tree from left to right***
Done iteratively:
check the root is not falsy,
init a stack wit hthe value of the root
init another stack to hold the values fomr the traversal
while the stack has a length
  pop off the current node in the stack and push the value of that node to results
  then check if there is a right node, if so push it to the stack
  Then check it there is a left node, if so push it to the stack
    (The order is important, The tree is searched from the left to the right of its nodes, so the right node is added to the stack first, then the left, as the stack is a LIFO structure, meaning the left will be processed first on the next iteration)
return the result array
*/

// iterative approach
// const preorderTraversal = root => {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];

//   while (stack.length > 0) {
//     let current = stack.pop();

//     result.push(current.val);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// };

//recursively
const preorderTraversal = root => {
  if (!root) return null;
  const result = [];

  const preOrderAuxFunc = node => {
    if (!node) return null;
    result.push(node.val);
    if (node.left) preOrderAuxFunc(node.left);
    if (node.right) preOrderAuxFunc(node.right);
  };
  preOrderAuxFunc(root);
  return result;
};
