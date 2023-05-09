/*
Link:
https://leetcode.com/problems/sqrtx/
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
Example 1:
  Input: x = 4
  Output: 2
  Explanation: The square root of 4 is 2, so we return 2.
Example 2:
  Input: x = 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
Constraints:
0 <= x <= 231 - 1
*/

/*
Pseudocode:
if x less than or equal to 1 return x
otherwise loop from 2 to x
  if index * index equals x return index
  else if index * index is greater than x return previous index (index-1)

***This is the simplest solution, but could also be done with a binary search***
*/

// const mySqrt = x => {
//   if (x <= 1) return x;

//   for (let i = 2; i <= x; i++) {
//     if (i * i === x) {
//       return i;
//     } else if (i * i > x) {
//       return i - 1;
//     }
//   }
// };

//binary search form:
//slightly more efficient approach for bigger datasets
const mySqrt = x => {
  let min = 0;
  let max = x;
  while (min <= max) {
    const mid = Math.floor((max + min) / 2);
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } else if (x < mid * mid) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
};

module.exports = mySqrt;
