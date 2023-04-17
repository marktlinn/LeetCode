/*
Link:
https://leetcode.com/problems/happy-number/

Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
Example 1:
  Input: n = 19
  Output: true
  Explanation:
  1**2 + 9**2 = 82
  8**2 + 2**2 = 68
  6**2 + 8**2 = 100
  1**2 + 0**2 + 02 = 1
Example 2:
  Input: n = 2
  Output: false
Constraints:
1 <= n <= 231 - 1
*/

/*
Pseudocode:
Take in number 
Declare a map to hold all the sums found
  split the number into digits
  loop over the digits and create a sum of the square of each digit
  if sum === 1 return true
  else if sum appears in the map return false
  else continue with the loop
*/

/*
***Recursive solution:***
Using an auxiliary function and a while loop to continuously call that function until a true or false condition is met
*/
const isHappy = (n, hashMap = {}) => {
  if (n === 1) return true;
  if (hashMap.hasOwnProperty(n)) return false;

  const sum = String(n)
    .split("")
    .reduce((prev, curr) => (prev += Number(curr) * Number(curr)), 0);
  hashMap[n] = 1;
  return isHappy(sum, hashMap);
};

/*
***Solution With While:***
Using an auxiliary function and a while loop to continuously call that function until a true or false condition is met
*/

// const getSumOfSquares = n => {
//   const result = String(n)
//     .split("")
//     .reduce((prev, curr) => (prev += Number(curr) * Number(curr)), 0);
//   return Math.abs(result);
// };

// const isHappy = n => {
//   const collectionOfSeenNumbers = new Map();
//   let sum = n;
//   while (sum !== 1 && !collectionOfSeenNumbers.has(sum)) {
//     collectionOfSeenNumbers.set(sum, 1);
//     sum = getSumOfSquares(sum);
//     console.log(sum);
//   }
//   return sum === 1 ? true : false;
// };

console.log(isHappy(19));

module.exports = isHappy;
