/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 1) {
    return 1;
  }
  if (s.length === 2) {
    if (s[0] != s[1]) {
      return 2;
    }
  }
  let currentSet = new Set();
  let i = 0;
  currentSet.add(s[0]);
  let maxLength = 0;

  for (let j = 1; j < s.length; j++) {
    console.log(s[j]);
    console.log(j);
    console.log(i);
    if (maxLength < j - i) {
      maxLength = j - i;
      if (maxLength == 1 && s[i] != s[j]) {
        maxLength = 2;
      }
    }

    while (i < j) {
      if (currentSet.has(s[j])) {
        i++;
        console.log(i);
      } else {
        currentSet.add(s[j]);
        break;
      }
    }
  }

  return maxLength;
};
// @lc code=end
