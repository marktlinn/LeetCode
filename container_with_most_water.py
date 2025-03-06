"""

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

"""


def max_area(height: list[int]) -> int:
    start, end = 0, len(height) - 1
    max_val = 0
    print(height[start], start)
    print(height[end], end)

    while start < end:
        # print(f"max_val ==={max_val}")
        new_height = min(height[start], height[end])
        spaces = end - start
        if new_height * spaces > max_val:
            max_val = new_height * spaces
        if height[start] < height[end]:
            start += 1
        else:
            end -= 1

    return max_val


print(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49)
print(max_area([1, 1]) == 1)
