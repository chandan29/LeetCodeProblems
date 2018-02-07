/*Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length==0){
        return 0;
    }
    var temp=[];
    var j=0;
    for(var i=0;i<nums.length-1;i++){
        if(nums[i]!=nums[i+1]){
            nums[j]=nums[i];
            j++;
        }
    }
    nums[j]=nums[nums.length-1];
    return j+1;
};
