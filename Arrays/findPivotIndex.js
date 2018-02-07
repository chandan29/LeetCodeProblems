/*Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var lhs=0,rhs=0;
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length;j++){
            if(j<i){
                lhs+=nums[j];
            }
            if(j>i){
                rhs+=nums[j];
            }

        }
        if(lhs==rhs){
            return i;
        }
        // console.log("Lhs:"+lhs+" Rhs:"+rhs);
        lhs=0;
        rhs=0;

    }
    return -1;
};
