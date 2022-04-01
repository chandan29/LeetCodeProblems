/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums || !nums.length){
        return 0;
    }
    var ind = 1;
    for(var i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            continue;
        }
        else{
            nums[ind++] = nums[i];
        }
    }
    
    return ind;
};