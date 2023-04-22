/*
Link:
https://leetcode.com/problems/filter-elements-from-array/
Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0

Example 3:
  Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
  Output: [-2,0,1,2]
  Explanation:
  Falsey values such as 0 should be filtered out

Constraints:
  0 <= arr.length <= 1000
  -109 <= arr[i] <= 109
*/

/*
Pseudocode:
Create a variable to hold the result
Loop through the array and run a test if each element, index passed to the function is truthy,
  if so push the elem to the result
return the results
*/

// const filter = (arr, fn) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i], i) ? result.push(arr[i]) : null;
//   }
//   return result;
// };

module.exports = filter;
