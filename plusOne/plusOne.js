/*
Link:
https://leetcode.com/problems/plus-one/

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Example 1:
  Input: digits = [1,2,3]
  Output: [1,2,4]
  Explanation: The array represents the integer 123.
  Incrementing by one gives 123 + 1 = 124.
  Thus, the result should be [1,2,4].

Example 2:
  Input: digits = [4,3,2,1]
  Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.
  Incrementing by one gives 4321 + 1 = 4322.
  Thus, the result should be [4,3,2,2].

Example 3:
  Input: digits = [9]
  Output: [1,0]
  Explanation: The array represents the integer 9.
  Incrementing by one gives 9 + 1 = 10.
  Thus, the result should be [1,0].
 
Constraints:
  1 <= digits.length <= 100
  0 <= digits[i] <= 9
  digits does not contain any leading 0's.
*/

/*
Pseudocode:
Loop backwards through the digits
  if the last digit is not a 9
    increment the digit by 1 and return the digits array
  else (it is a 9)
    set the value for digit at current index to 0
***(this will keep going until it meets a number that isn't a 9 when it'll return)***
unshift a 1 onto the array and return it
***(if no non 9 digit is found everything will be set to zeros and the 1 is added to create the round value)***

*/

const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

module.exports = plusOne;
