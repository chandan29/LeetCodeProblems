/*Given a non-empty array of integers, return the third maximum number in this array.
 If it does not exist, return the maximum number. The time complexity must be in O(n).*/


 /**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums){
    var setarr=[...new Set(nums)].sort(function(a, b){return a - b});
    if(setarr.length>=3){
        return setarr[setarr.length-3];
    }
    else{
        return setarr[setarr.length-1];
    }
};
