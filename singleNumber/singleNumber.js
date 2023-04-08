/*
Link:
https://leetcode.com/problems/single-number/
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
Example 1:
  Input: nums = [2,2,1]
  Output: 1
Example 2:
  Input: nums = [4,1,2,1,2]
  Output: 4
Example 3:
  Input: nums = [1]
  Output: 1
Constraints:
  1 <= nums.length <= 3 * 104
  -3 * 104 <= nums[i] <= 3 * 104
  Each element in the array appears twice except for one element which appears only once.
*/

/*
Pseudocode:
Create a map
loop through the values
  if the value exists as a key in the array increment its value,
  else if the value doesn't exist in the map add value as a key to the map with the initial value of 1

finally loop through the key/val pairs in the map,
  if the val === 1 return the key
  else return null*
  ***The non-existence edge case is not included in the challenge but I've included it here for good practice purposes***
*/
const singleNumber = nums => {
  const map = new Map();
  for (const elem of nums) {
    if (map.has(elem)) {
      const mapVal = map.get(elem);
      map.set(elem, mapVal + 1);
    } else {
      map.set(elem, 1);
    }
  }
  for (const [key, val] of map) {
    if (val === 1) return key;
  }
  //No included in the challenge code as not required by the challenge
  return null;
};

module.exports = singleNumber;
