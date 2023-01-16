/*
Link:
https://leetcode.com/problems/longest-common-prefix/
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
  Input: strs = ["flower","flow","flight"]
  Output: "fl"
Example 2:
  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.
\\\\pseudocode////
Get the length of the first word store in a variable
  while length > 0 
    test every word in the array to see if it equals the first element sliced from 0 to length
      if so return word
      else decrement length
return "" if no fitting prefix found.

*/
const longestCommonPrefix = strs => {
  let length = strs[0].length;
  while (length > 0) {
    const word = strs[0].slice(0, length);
    if (strs.every(elem => elem.slice(0, length) === word)) {
      return word;
    }
    length--;
  }
  return "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
