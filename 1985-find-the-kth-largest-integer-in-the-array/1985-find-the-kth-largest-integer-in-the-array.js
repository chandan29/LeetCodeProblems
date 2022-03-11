/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    nums.sort((a,b)=>{
        return BigInt(a) >  BigInt(b) ? 1 : -1;
    });
    
    let ind = nums.length - k;
    return nums[ind];
};