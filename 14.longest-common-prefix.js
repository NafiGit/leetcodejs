/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let commonPrefixTwoWords = function (first, second, prevIndexPrefixEnd) {
    if (first.length < second.length) {
      len = first.length;
    } else {
      len = second.length;
    }

    let indexPrefixEnd;

    for (let i = 0; i < len; i++) {
      if (first[i] != second[i]) {
        indexPrefixEnd = i;
        if (prevIndexPrefixEnd < indexPrefixEnd) {
          return prevIndexPrefixEnd;
        } else {
          return indexPrefixEnd;
        }
      }
    }

    indexPrefixEnd = len;
    if (prevIndexPrefixEnd < indexPrefixEnd) {
      return prevIndexPrefixEnd;
    } else {
      return indexPrefixEnd;
    }
  };

  commonPrefix = "";
  let indexPrefixEnd = Infinity;
  for (let i = 0; i < strs.length - 1; i++) {
    indexPrefixEnd = commonPrefixTwoWords(strs[i], strs[i + 1], indexPrefixEnd);
    if (indexPrefixEnd === 0) {
      return "";
    }
  }
  return strs[0].slice(0, indexPrefixEnd);
};
// @lc code=end
