/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===1){
        return nums[0];
    }
    var maxProfit = [];
    
    maxProfit[nums.length] = 0;
    maxProfit[nums.length-1] = nums[nums.length-1];
    
    for(var i=nums.length-2;i>=0;i--){
        maxProfit[i] = Math.max(maxProfit[i+1],maxProfit[i+2] + nums[i]);
    }
    
    return maxProfit[0];
};