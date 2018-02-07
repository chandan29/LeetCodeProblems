/*
Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    i = digits.length-1;
    while(digits[i] === 9)
        digits[i--] = 0;
    if(i < 0)
        digits.splice(0,0,1);
    else
        digits[i]++;
    return digits;
   // return (parseInt(digits.join(''))+1).toString().split('').map(function(x) {return parseInt(x)});
};
