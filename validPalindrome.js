/*
LEETCODE PROBLEM : Valid Palindrome
Link: https://leetcode.com/problems/valid-palindrome/description/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.

Example 3:
  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
  1 <= s.length <= 2 * 105
  s consists only of printable ASCII characters.
*/

//A typical "Brute force" solution, to gauge the likely "worst case" time and space complexity before exploring improvement and optimisations.
// const isPalindrome = s => {
//   const comparison = s
//     .toLowerCase()
//     .split("")
//     .filter(elem => elem.match(/[a-z]/))
//     .join("");
//   const reverse = s
//     .toLowerCase()
//     .split("")
//     .filter(elem => elem.match(/[a-z]/))
//     .reverse()
//     .join("");

//   return reverse === comparison ? true : false;
// };

//SLightly more performant in terms of time complexity, could be done with copying s and replacing all details into a new var or by replacing the original data which is done in this example.
// const isPalindrome = s => {
//   s = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
//   const reverse = s.split("").reverse().join("");
//   return reverse === s ? true : false;
// };

//I'd prefer the copying form, so as to maintain the integrity of the input data, provided their are no severe memory restrictions. E.G
// const isPalindrome = s => {
//   const comparison = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
//   const reverse = s.split("").reverse().join("");
//   return reverse === comparison ? true : false;
// };

//Better solution in terms of space complexity, no second variable is created, instead the string after being manipulated and sanitised ready for comparison is being traversed from both sides simultaneously and each element is being compared, if not matching it is not a palindrome so false is returned.
// const isPalindrome = s => {
//   const comparison = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
//   let index = 0;
//   for (let i = comparison.length - 1; i > 0; i--) {
//     if (comparison[i] !== comparison[index]) {
//       return false;
//     }
//     index++;
//   }
//   return true;
// };

//Using a while loop here gets a slightly improved benchmark for the memory complexity but a slightly reduced time complexity, but ultimately there is not much in this and the previous solution. Both of which are vast improvements on the original "Brute Force" solution.
const isPalindrome = s => {
  const comparison = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
  let index = 0;
  let endEx = comparison.length - 1;
  while (index < endEx) {
    if (comparison[endEx] !== comparison[index]) {
      return false;
    }
    endEx--;
    index++;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("race car"));
