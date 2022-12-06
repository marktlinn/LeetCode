/*
Link:
https://leetcode.com/problems/jewels-and-stones/
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
Example 1:
  Input: jewels = "aA", stones = "aAAbbbb"
  Output: 3
Example 2:
  Input: jewels = "z", stones = "ZZ"
  Output: 0
Constraints:
  1 <= jewels.length, stones.length <= 50
  jewels and stones consist of only English letters.
  All the characters of jewels are unique.

\\\\pseudocode////
////More optimised solution\\\\ 
removing the need to reduce the array or set values within the map
set the jewels in a new Set;
create an empty count variable = 0;
loop through the letters of stones if set has value increment count by 1
return count.
Easy, clean and performant
*/

const numJewelsInStones = function (jewels, stones) {
  const stoneMap = new Set(jewels);
  let count = 0;

  for (let letter of stones) {
    if (stoneMap.has(letter)) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb")); // => 3

//initial solution which I later refactored to the above
// const numJewelsInStones = function (jewels, stones) {
//   const stoneMap = new Map();
//   for (let letter of jewels) {
//     stoneMap.set(letter, 0);
//   }
//   for (let letter of stones) {
//     if (stoneMap.has(letter)) {
//       stoneMap.set(letter, stoneMap.get(letter) + 1);
//     }
//   }
//   return Array.from(stoneMap.values()).reduce((ttl, curr) => ttl + curr);
// };
