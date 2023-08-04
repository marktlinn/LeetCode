/*
Link: https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
*/

import java.util.Arrays;

class MoveZeroes {
  public static void moveZeroes(int[] nums) {
    int lastZeroI = 0;

    for (int i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        int temp = nums[i];
        nums[i] = nums[lastZeroI];
        nums[lastZeroI] = temp;

        lastZeroI++;
        System.gc();
      }
    }
  }

  public static void main(String[] args) {
    int[] arr = new int[] { 0, 1, 2, 0, 0, 4, 4, 1, 0, 1 };
    moveZeroes(arr);
    System.out.println(Arrays.toString(arr));
  }
}