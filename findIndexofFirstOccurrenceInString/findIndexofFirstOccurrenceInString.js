/*
Link:
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:
  Input: haystack = "sadbutsad", needle = "sad"
  Output: 0
  Explanation: "sad" occurs at index 0 and 6.
  The first occurrence is at index 0, so we return 0.
Example 2:
  Input: haystack = "leetcode", needle = "leeto"
  Output: -1
  Explanation: "leeto" did not occur in "leetcode", so we return -1.
Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

/*
Pseudocode:
1st solution
create a new regex from the needle and match the regex in the haystack
if there is a match return the index of the match
else return -1

2nd solution
A slightly more perfomant way of doing this and also less verbose would be to just search the haystack for the indexOf(needle), as that way it's not necessary to create a new regex var or search the match object to find the index. It'll automatically return the index if it exist or else -1

3rd Solution
Alternatively, the haystack could just be loop through and a slice taken from the current index  to length of needle + index and if slice matches needle return index
else return -1 when loop finishes.

In tests using the .substring() method was more perfomant than .slice() so the code below maintains .substring().
*/

// const strStr = (haystack, needle) => {
//   const exp = new RegExp(needle);
//   return haystack.match(exp) ? haystack.match(exp).index : -1;
// };

// const strStr = (haystack, needle) => {
//   return haystack.indexOf(needle);
// };

const strStr = (haystack, needle) => {
  if (haystack.length < needle) return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, needle.length + i) === needle) {
      return i;
    }
  }
  return -1;
};

//Input: haystack = "sadbutsad", needle = "sad"
//haystack = "leetcode", needle = "leeto"
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("haahellopeople!", "hello"));

module.exports = strStr;
