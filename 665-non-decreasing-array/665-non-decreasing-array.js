/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let badIndex = -1;
    
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            if(badIndex===-1){
                badIndex = i;
            }
            else{
                return false;
            }
        }
    }
    if(badIndex<=0 || badIndex === nums.length-2){
        return true;
    }
    else{
        return nums[badIndex-1] <= nums[badIndex+1] || nums[badIndex]<=nums[badIndex+2];
    }
};