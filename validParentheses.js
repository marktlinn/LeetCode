/*
Link: 
https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:
  Input: s = "()"
  Output: true
Example 2:
  Input: s = "()[]{}"
  Output: true
Example 3:
  Input: s = "(]"
  Output: false
Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
*/

// If the parentheses can be split up throughout the string and not given open-to-close consecutively then the following is the best method.
/* 
\\\\Pseudocode////
create th eobject of the key value pairs for the opening and closing of parentheses
intilise an empty stack i.e. array = [];
loop through the chars of the string.
  if char exists in the parentheses object set the corresponding value into the stack
  else if the stack's lenght is greater than 0 & the final element in the stack is equal to the currrent
  char pop that element/char off the stack
  else return false
finally return true if the final state of the stack's length is 0, else return false (as the elements were not all valid parentheses)
*/
const isValid = function (s) {
  const parenthesis = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (const char of s) {
    if (parenthesis[char]) {
      stack.push(parenthesis[char]);
    } else if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else return false;
  }
  return stack.length === 0;
};

console.log(isValid((s = "()")));
// // Output: true
console.log(isValid((s = "()[]{}")));
// // Output: true
console.log(isValid((s = "(]")));
//Output: false
