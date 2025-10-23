# def max_sub_array(nums: list[int]) -> int:
#     max_sum = nums[0]
#     current_sum = nums[0]
#
#     for i in range(1, len(nums)):
#         current_sum = max(nums[i], current_sum + nums[i])
#
#         max_sum = max(max_sum, current_sum)
#
#     return max_sum


# clearer solution
# add numbers to sum
# if sum dips below baseline 0, just reset it to 0
def max_sub_array(nums: list[int]) -> int:
    sum = 0
    max = nums[0]

    for i in nums:
        sum += i

        if sum > max:
            max = sum
        if sum < 0:
            sum = 0

    return max


print(max_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # Output: 6
# Explanation: The subarray [4,-1,2,1] has the largest sum 6.

print(max_sub_array([1]))  # Output: 1
# Explanation: The subarray [1] has the largest sum 1.

print(max_sub_array([5, 4, -1, 7, 8]))  # Output: 23
# Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
