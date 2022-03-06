/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var flipped = 0;
    var count = 0;
    var maxCount = 0;
    var flippedIndex = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++;
        }
        else{
            flipped++;
            if(flipped===2){
                flipped = 0;
                maxCount = Math.max(maxCount,count);
                count = 0;
                i = flippedIndex;
                continue;
            }
            else{
                flippedIndex = i;
                count++;
            }
        }
    }
    maxCount = Math.max(maxCount,count);
    return maxCount
};