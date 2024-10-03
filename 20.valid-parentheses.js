/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

var isValid = function (s) {
  let myStack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      myStack.push(s[i]);
    } else {
      if (myStack.isEmpty()) {
        return false;
      } else {
        let poppedItem = myStack.pop();
        if (
          (poppedItem === "{" && s[i] === "}") ||
          (poppedItem === "[" && s[i] === "]") ||
          (poppedItem === "(" && s[i] === ")")
        ) {
        } else {
          return false;
        }
      }
    }
  }
  if (myStack.isEmpty()) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
