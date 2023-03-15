/*
Link: 
https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
Custom Judge:
The judge will test your solution with the following code:
  int[] nums = [...]; // Input array
  int[] expectedNums = [...]; // The expected answer with correct length

  int k = removeDuplicates(nums); // Calls your implementation

  assert k == expectedNums.length;
  for (int i = 0; i < k; i++) {
      assert nums[i] == expectedNums[i];
  }
If all assertions pass, then your solution will be accepted.

Example 1:
  Input: nums = [1,1,2]
  Output: 2, nums = [1,2,_]
  Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
  Input: nums = [0,0,1,1,1,2,2,3,3,4]
  Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
  Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).

\\\\pseudocode////
create a var to hold the current value at index, initialise as null.
Loop through the array
  if the holding var is not null
    check current element === var? if so
      push "_" to arr and splice arr at current index.
  else set var to equal current element
  return the mutated array.

//// Additional psudeocode below as the actual test cases and return values are slightly diffierent from the descrition given in the challenge//// See below 
*/

/* FIRST SOLUTION =>  
splice the duplicate values from the array, as the challenge description seemed to indicate the array needed to be return with all non-duplicate values in ascending order at the beginning of the array and that the array must maintain the same length, but that isn't acutally the test case they are using.
*/

// const removeDuplicates = nums => {
//   const length = nums.length;
//   if (length <= 1) return length;

//   let lastValue = null;
//   let index = 0;
//   let count = 0;
//   while (count < length) {
//     if (lastValue !== null) {
//       if (lastValue === nums[index]) {
//         nums.splice(index, 1);
//         count++;
//       } else {
//         lastValue = nums[index];
//         index++;
//         count++;
//       }
//     } else {
//       lastValue = nums[index];
//       index++;
//       count++;
//     }
//   }
//   return nums.length;
// };

//A more optimal solution considering the actual test cases given where only the array length is tested.
/*
Check the length of the Arr if, 1 or less return the length.
else
  •set an index counter to 0 and run a loop starting at the second element of the nums array
  •test if arr at index is equal to current elem
    if so increment index and set nums[index] to nums[currentLoopIndex]
finally return the value of i + 1 to account for the original 0 value as an index.

*** This way we are mutating the array and keeping a score of the number of duplicates found and changed via the index variable
*/
const removeDuplicates = nums => {
  const length = nums.length;
  if (length <= 1) return length;

  let index = 0;

  for (let i = 1; i < nums.length; i++) {
    console.log("loop", i, nums);
    if (nums[index] !== nums[i]) {
      index++;
      nums[index] = nums[i];
    }
  }
  return index + 1;
};

module.exports = removeDuplicates;

//yarn add @types/jest
