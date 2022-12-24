/*Link:
https://leetcode.com/problems/fibonacci-number/
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
Example 1:
  Input: n = 2
  Output: 1
  Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:
  Input: n = 3
  Output: 2
  Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:
  Input: n = 4
  Output: 3
  Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
Constraints:
    0 <= n <= 30
    
\\\\pseudocode////
If n === 0 return 0
if n === 1 return 1
otherwise initialise an array to hold a fibSequence with the initial value of [0]
  While n
    if fibSequence length is 1 
      push 1 to the array
    else slice the last two digits from the array, add them together and push them onto the top of the array
return the sum of last two elements of the array;
*/

const fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let fibSequence = [0];
  while (fibSequence.length < n) {
    if (fibSequence.length === 1) {
      fibSequence.push(1);
    } else {
      const twoNums = fibSequence.slice(fibSequence.length - 2);
      fibSequence.push(twoNums[0] + twoNums[1]);
    }
  }
  return fibSequence
    .slice(fibSequence.length - 2)
    .reduce((ttl, curr) => ttl + curr);
};

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
