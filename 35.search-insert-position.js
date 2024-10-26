/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    console.log(nums);
    let l = 0;
    let r = nums.length - 1;

    while (true) {
        let mid = Math.floor( (l + r) / 2 );

        console.log(mid);
    
        if ( nums.length === 0 ) {
            return 0;
        } 
    
        if (l > r) {
            return l;
        }
    
        if ( nums[mid] > target ) {
            r = mid - 1;
            console.log (r);
        } else if ( nums[mid] < target ) {
            l = mid + 1;
            console.log(l)
        } else if ( nums[mid] === target ) {
            return mid;
        }
    
        console.log ("end", l, r, mid);    

    }


};
// @lc code=end

