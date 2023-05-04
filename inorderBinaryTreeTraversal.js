/*
Link:
https://leetcode.com/problems/binary-tree-inorder-traversal/description/
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Example 1:
  Input: root = [1,null,2,3]
  Output: [1,3,2]

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
If the root given is null, return an empty array
declare two empty arrays: one to hold a stack and the other the results
create a var to hold the current root node
  while the current var has a value or while the stack has a length
    if current exists, push the current node onto the stack and set current to current.left
    else pop the last item off the stack and set it to current
      push the value of current to result
      set current to current.right
return result.

*/

var inorderTraversal = function (root) {
  if (!root) return [];

  const stack = [];
  const result = [];
  let current = root;

  while (current || stack.length > 0) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  }
  return result;
};
