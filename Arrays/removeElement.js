/*Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.*/


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var x=nums.length;
    for(var i=0;i<x;i++){
    if(nums[i]==val){
        nums.splice(nums.indexOf(nums[i]), 1);
        //nums.splice(i, 1);
        i--;
        x--;
    }
    };
    return nums.length;
};
