/*
Link:
https://leetcode.com/problems/length-of-last-word/

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
  Input: s = "Hello World"
  Output: 5
  Explanation: The last word is "World" with length 5.

Example 2:
  Input: s = "   fly me   to   the moon  "
  Output: 4
  Explanation: The last word is "moon" with length 4.

Example 3:
  Input: s = "luffy is still joyboy"
  Output: 6
  Explanation: The last word is "joyboy" with length 6.

Constraints:
  1 <= s.length <= 104
  s consists of only English letters and spaces ' '.
  There will be at least one word in s.
*/

/*
Pseudocode:
Declare a boolean var, init as false
delcare a var to hold a count, init as 0
loop backwards through the string
  if var is true and present char is not an empty space increment count
  else if var is true and char is an empty space return count
  else if char is not a space switch var to true and increment count
return count
*/

const lengthOfLastWord = s => {
  let lastWordFound = false;
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (lastWordFound === true && s[i] !== " ") {
      count++;
    } else if (lastWordFound === true && s[i] === " ") {
      return count;
    } else if (s[i] !== " ") {
      lastWordFound = true;
      count++;
    }
  }
  return count;
};

/*
Pseudocode:
This can also be achieved without the boolean variable, just by checking if the count has been incremented and if the value of the current index is " "

*/

// const lengthOfLastWord = s => {
//   let count = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (count >= 1 && s[i] !== " ") {
//       count++;
//     } else if (count >= 1 && s[i] === " ") {
//       return count;
//     } else if (s[i] !== " ") {
//       count++;
//     }
//   }
//   return count;
// };

//Simplified further:

// const lengthOfLastWord = s => {
//   let count = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (count >= 1) {
//       if (s[i] !== " ") {
//         count++;
//       } else {
//         return count;
//       }
//     } else if (s[i] !== " ") {
//       count++;
//     }
//   }
//   return count;
// };

// Done with a reverse, which was actually the most performant when running the code on LeetCode's servers
// const lengthOfLastWord = s => {
//   let count = 0;
//   const strArr = s.split("").reverse();
//   for (let i = 0; i < strArr.length; i++) {
//     if (count >= 1) {
//       if (strArr[i] !== " ") {
//         count++;
//       } else {
//         return count;
//       }
//     } else if (strArr[i] !== " ") {
//       count++;
//     }
//   }
//   return count;
// };

module.exports = lengthOfLastWord;
