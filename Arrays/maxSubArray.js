/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var start=0,s=0,end=0,max_till_now=nums[0],max_new=0;
    for(var i=0;i<nums.length;i++){
        max_new+=nums[i];
        if(max_till_now<max_new){
            start=s;
            end=i;
            max_till_now=max_new;
        }
        if(max_new<0){
            s=i+i;
            max_new=0;
        }
    }
    return max_till_now;
};
