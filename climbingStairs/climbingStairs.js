/*
Link:
https://leetcode.com/problems/climbing-stairs/

ou are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1:
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps
Example 2:
  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step
Constraints:
  1 <= n <= 45
*/

/*
Pseudocode:
***
This problem can be solved by finidng optimal substructure properties: it can be solved by finding the smaller solutions within the problem
The permutations for the number of ways to climb the stairs can be known from the sum of the possible permutations of the previous two number sof stairs e.g. if n is 5, then the answer with be the sum of n=4 + n=3
(When n is 3 there are 3 permutations, when n is 4 there are 5 permutations, therefore when n = 5 there are 8 permuatations)
***

Solution:

create an array with the first two values equal to the permutations for n=1 and n=2
start a loop from 2 (as the first two index points are known)
for each index push the new permutation to the array
return the last index of the array, or simply index = [n-1]
*/

const climbStairs = n => {
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[n - 1];
};

module.exports = climbStairs;
