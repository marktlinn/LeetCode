/*
Link:
https://leetcode.com/problems/contains-duplicate/
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
  Input: nums = [1,2,3,1]
  Output: true
Example 2:
  Input: nums = [1,2,3,4]
  Output: false
Example 3:
  Input: nums = [1,1,1,3,3,4,3,2,4,2]
  Output: true
\\\\pseudocode////
create an empty object and loop through the array of digits
  if object hasOwnProperty of digit return true
  else add key to the object and continue the loop
return false, as no duplicate was found.
*/

const containsDuplicate = function (nums) {
  const duplicateCheck = {};
  for (let digit of nums) {
    if (duplicateCheck.hasOwnProperty(digit)) {
      return true;
    }
    duplicateCheck[digit] = true;
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
