/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  console.log(x);

  let y = String(x);
  let len = y.length;
  console.log(y, len);

  for (let k = 0; k < y.length; k++) {
    console.log(y[k], y[len - k - 1]);
    if (y[k] != y[len - k - 1]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
