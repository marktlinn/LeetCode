/*
Link:
https://leetcode.com/problems/add-binary/
Given two binary strings a and b, return their sum as a binary string.
Example 1:
  Input: a = "11", b = "1"
  Output: "100"
Example 2:
  Input: a = "1010", b = "1011"
  Output: "10101"
Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

/*
Pseudocode:
Init an empty array to hold the result. and a counter to hold any carried values init at 0.
Create a loop do go through both values, from end to beginning.
declare a sum to initially equal the value of carry
  if a[at index] has a value add it to sum
  if b[at index] has a value add it to sum

  if sum is greater than 2 (there's a carried digit plus both a and b have a positive 1)
    unshift to the array the value "1"
  else if sum is greater than 1, but less than 3 (either both a and b have a value or one does and there's a carried digit)
    unshift a "0" to the result array and set carry=1
  else (sum is 1 or less)
    set carry to zero and unshift the sum to the array
After the loop check if carry has a value of 1 or more, if so shift it onto the array

return the array joined into a string
*/

const addBinary = (a, b) => {
  let result = [];
  let carry = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = carry;
    if (a[i]) sum += +a[i];
    if (b[j]) sum += +b[j];

    if (sum > 2) {
      result.unshift("1");
    } else if (sum > 1) {
      result.unshift("0");
      carry = 1;
    } else {
      carry = 0;
      result.unshift(sum);
    }
  }

  if (carry > 0) {
    result.unshift(carry);
  }

  return result.join("");
};

module.exports = addBinary;
