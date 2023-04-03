/*
Link:
https://leetcode.com/problems/search-insert-position/

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
***You must write an algorithm with O(log n) runtime complexity.***

Example 1:
  Input: nums = [1,3,5,6], target = 5
  Output: 2

Example 2:
  Input: nums = [1,3,5,6], target = 2
  Output: 1
  Example 3:
  Input: nums = [1,3,5,6], target = 7
  Output: 4
 
Constraints:
  1 <= nums.length <= 104
  -104 <= nums[i] <= 104
  nums contains distinct values sorted in ascending order.
  -104 <= target <= 104
*/

/*
Pseudocode:

***Appraoch one: a Binary Search***
This is effectively a binary search algorithm with monitoring of the values vs the target.
Initialise vars for the left and right: left = 0 and right = nums.length-1

if target is greater than the last num in arr return arr's length
else if less than first elem return 0;

while left is less than or equal to right
  take the middle index of nums
    if numsArr at middle index = target, return middle index
    else if nums at mid index is < target
      if nums at index +1 === target and nums at next index is not target return mid +1
      else set left to = mid+1
    else if nums at mid index is > target
      if nums at index-1 === target and nums at prev index is not target return mid -1
      else set right = mid-1


The first and most algorithmic approach is likely the best depending on the length of the array, if the array is known to very short a simple search or finindex method would suffice but for unknown or large data sets of ordered numbers a binary search would be the most efficient choice
*/

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  if (target > nums[right]) return nums.length;
  if (target < nums[left]) return left;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      if (nums[mid] + 1 === target && nums[mid + 1] !== target) {
        return mid + 1;
      }
      left = mid + 1;
    } else {
      if (nums[mid] - 1 === target && nums[mid - 1] !== target) {
        return mid;
      }
      right = mid - 1;
    }
  }
};

/*
Pseudocode:
***Approach 2: using JS methods ***
Using the findIndex method (which return the index of the first element satisfying a criteria).
Declare a var to be the result of searching through the numsArr to find the first element that is greater than or equal to target in value
if no value is found the result will be -1
  if result is -1 return the length of the nums array, as there is no number greater than target therefore target must be appended to the end
  else return the index found, as this represent the indeical slot suitable for the target value
*/

// const searchInsert = (nums, target) => {
//   const indexFound = nums.findIndex(elem => elem >= target);
//   return indexFound === -1 ? nums.length : indexFound;
// };

//Or with initial tests
// const searchInsert = (nums, target) => {
//   if (target >= nums[nums.length - 1]) return nums.length;
//   if (target <= nums[0]) return 0;
//   const indexFound = nums.findIndex(elem => elem >= target);
//   return indexFound === -1 ? nums.length : indexFound;
// };

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
console.log(searchInsert([1, 3, 5, 6], 0)); //0
console.log(searchInsert([3, 6, 7, 8, 10], 5)); //1
console.log(searchInsert([2, 3, 4, 7, 8, 9], 11)); //6
console.log(searchInsert([2, 3, 4, 8, 10], 0)); //0

module.exports = searchInsert;
