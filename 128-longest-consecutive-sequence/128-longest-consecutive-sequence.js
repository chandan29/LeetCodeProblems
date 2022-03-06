/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums || !nums.length){
        return 0;
    }
    nums.sort(function(a,b){return a-b});
    var max = 1;
    var curr = 1;
    for(var i=1;i<nums.length;i++){
        if(nums[i-1]+1 === nums[i]){
            curr++;
        }
        else if(nums[i-1]===nums[i]){
        }
        else{
            curr = 1;
        }
        max = Math.max(max,curr);
    }
    
    return max;
};