/*
Link: 
https://leetcode.com/problems/majority-element/
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:
  Input: nums = [3,2,3]
  Output: 3
Example 2:
  Input: nums = [2,2,1,1,1,2,2]
  Output: 2
\\\\Pseudocode////
If nums.length is only 1 just return nums.
Create a new map to store the digits
loop through the elements of nums
  if the map has the element:
    increment the value by one
      if the count is greater than nums.length/2 return the elem
  else create a new entry for the elem with a value set to 1
*/

const majorityElement = function (nums) {
  if (nums.length < 2) return nums;
  const numMap = new Map();
  for (const elem of nums) {
    if (numMap.has(elem)) {
      const count = numMap.get(elem) + 1;
      numMap.set(elem, count);
      if (count >= nums.length / 2) {
        return elem;
      }
    } else {
      numMap.set(elem, 1);
    }
  }
};

const nums1 = [3, 2, 3];
const nums2 = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums1));
console.log(majorityElement(nums2));
