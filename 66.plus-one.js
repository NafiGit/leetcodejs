/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function( digits ) {
    const lastIndex = digits.length - 1;

    let ri = lastIndex;
    while( ri >= 0 ) {
        if ( digits[ri] === 9 ) {
            ri--;
        } else {
            break;
        } 
    }

    // ri is at the pointer just 1 digit before the last 9 from the right
    // this can be a non 9 digits
    // or it can be -1

    if (ri === -1) {
        digits.push ( 0 );
        ri++;
        digits[ ri ] = 1;
        ri++;
        while ( ri <= lastIndex ) {
            digits [ri] = 0
            ri++;
        }
        console.log (digits)
    } else if ( ri >= 0 ) {
        digits[ ri ] += 1
        while ( ++ri <= lastIndex ) {
            digits [ ri ] = 0;
        }
    } 

    return digits;
};
// @lc code=end

