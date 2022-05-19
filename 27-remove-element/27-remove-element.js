/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    var arr = [];
    
    for(var i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            arr.push(nums[i]);
        }
    }
    
    var numsLenDiff = nums.length - arr.length;
    
    for(var i=0;i<arr.length;i++){
        nums[i] = arr[i];
    }
    
    while(numsLenDiff){
        nums.pop();
        numsLenDiff--;
    }
};