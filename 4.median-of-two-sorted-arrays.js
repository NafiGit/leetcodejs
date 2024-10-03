/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merged_arr = [];
  merged_arr = merged_arr.concat(nums1);
  merged_arr = merged_arr.concat(nums2);
  let temp;

  // console.log(merged_arr);

  for (let i = 0; i < merged_arr.length; i++) {
    for (let j = 0; j < merged_arr.length; j++) {
      {
        if (merged_arr[i] < merged_arr[j]) {
          temp = merged_arr[i];
          merged_arr[i] = merged_arr[j];
          merged_arr[j] = temp;
        }
      }
    }
  }
  console.log(merged_arr);

  let len = merged_arr.length;
  let mid;

  console.log("len:", len);
  if (len % 2 == 0) {
    mid1 = len / 2 - 1;
    mid2 = len / 2;
    console.log("even => len/2:", mid1, mid2);
    return (merged_arr[mid1] + merged_arr[mid2]) / 2;
  } else {
    mid = Math.floor(len / 2);
    console.log("odd => len/2:", mid);
    return merged_arr[mid];
  }
};
// @lc code=end
