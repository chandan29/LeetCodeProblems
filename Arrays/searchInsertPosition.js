/*Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }
        else if(nums[i]>target){
                return i;
                }
        else{
            if(i==(nums.length-1)){
                return i+1;
            }

        }
    }
};
