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