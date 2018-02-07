/*Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of
all the elements of nums except nums[i].
For example, given [1,2,3,4], return [24,12,8,6].
*.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var arr=[];
    var cnt=1;
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length;j++){
            if(i!=j){
                cnt*=nums[j];
            }
        }
        arr.push(cnt);
        cnt=1;
    }
    return arr;
};
