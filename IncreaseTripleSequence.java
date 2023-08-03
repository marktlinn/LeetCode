/*
Link: https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:
  Input: nums = [1,2,3,4,5]
  Output: true
  Explanation: Any triplet where i < j < k is valid.
Example 2:
  Input: nums = [5,4,3,2,1]
  Output: false
  Explanation: No triplet exists.
Example 3:
  Input: nums = [2,1,5,0,4,6]
  Output: true
  Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 
Constraints:
  1 <= nums.length <= 5 * 105
  -231 <= nums[i] <= 231 - 1
*/


class IncreaseTripleSequence {
  // first:
  // public static boolean increasingTriplet(int[] nums) {
  //   if (nums == null || nums.length < 3) {
  //       return false;
  //   }

  //   int min = Integer.MAX_VALUE;
  //   int middle = Integer.MAX_VALUE;

  //   for (int num : nums) {
  //       if (num <= min) {
  //           min = num;
  //       } else if (num <= middle) {
  //           middle = num;
  //       } else {
  //           return true;
  //       }
  //   }
  //   return false;
  // }

  // second:
  // manually trigger GC
  public static boolean increasingTriplet(int[] nums) {
    if (nums == null || nums.length < 3) {
        return false;
    }

    int min = Integer.MAX_VALUE;
    int middle = Integer.MAX_VALUE;

    for (int num : nums) {
        if (num <= min) {
            min = num;
        } else if (num <= middle) {
            middle = num;
          } else {
            System.gc();
            return true;
        }
    }
    return false;
  }
  public static void main(String[] args) {
    System.out.println(increasingTriplet(new int[] { 1, 2, 3, 4 }));
    System.out.println(increasingTriplet(new int[] { 4,3,2,1 }));
    System.out.println(increasingTriplet(new int[] { 4,1,5,6 }));
    System.out.println(increasingTriplet(new int[] { 4,1,2,3,4 }));
    System.out.println(increasingTriplet(new int[] { 2,1,5,0,4,6 }));
    System.out.println(increasingTriplet(new int[] { 20, 100, 10, 12, 5, 13 }));

  }
}