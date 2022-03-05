/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var op = [];
    
    for(var i=0;i<nums.length;i++){
        var j = i + 1;
        
        while(true){
            if(j===nums.length){
                j = 0;
                continue;
            }
            if(j===i){
                op.push(-1);
                break;
            }
            if(nums[j]>nums[i]){
                op.push(nums[j]);
                break;
            }
            j++;
        }
    }
    
    return op;
};