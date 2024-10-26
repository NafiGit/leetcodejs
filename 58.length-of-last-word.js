/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    console.log( s );

    let s2 = s.trim()
    let s3 = s2.split(' ')
    console.log(s3)
    let s4 = s3[s3.length-1]

    return s4.length
};
// @lc code=end

