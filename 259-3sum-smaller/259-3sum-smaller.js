/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    var triplets = 0;
    for(var i=0;i<nums.length-2;i++){
        for(var j=i+1;j<nums.length-1;j++){
            for(var k = j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k] < target){
                    triplets++;
                }
            }
        }
    }
    
    return triplets;
};