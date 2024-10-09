/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  nums = Array.from(new Set(nums));
  if (nums.length == 1) {
    return 1;
  }
  if (nums.length == 0) {
    return 0;
  }

  let streak = 0;
  let maxstreak = 1;

  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] == nums[i - 1] + 1) {
      streak++;
      if (streak >= maxstreak) {
        maxstreak = streak + 1;
      }
    } else {
      streak = 0;
    }
  }

  return maxstreak;
};
// @lc code=end
