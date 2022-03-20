/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var numZeros = 0;
    var ind = 0;
    
    for(var i=0;i<nums.length;i++){
        if(nums[i]===0){
            numZeros++;
        }
        else{
            nums[ind] = nums[i];
            ind++;
        }
    }
    
    while(numZeros){
        nums[ind] = 0;
        ind++;
        numZeros--;
    }
};