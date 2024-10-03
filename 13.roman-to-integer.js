/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  console.log(s);
  let num = 0;
  // IV = 4
  // VI = 6 VII, VIII, IX, X, XI, XII, XIII, XIV
  // I, II, III, IV, V

  // IC = 499
  // I = 1
  // V = 5
  // X = 10
  // L = 50
  // C = 100
  // D = 500
  // M = 1000

  const converter = {
    NaN: 0,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    currentRomanNumeral = s[i];
    nextRomanNumeral = s[i + 1] || "NaN";

    if (converter[currentRomanNumeral] < converter[nextRomanNumeral]) {
      total -= converter[currentRomanNumeral];
    } else {
      total += converter[currentRomanNumeral];
    }
  }

  console.log(total);
  return total;
};
// @lc code=end
