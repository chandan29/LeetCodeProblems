/*Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.
It doesn't matter what you leave beyond the new length.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length==0){
        return [];
    }
    var j=0;
    for(var i=0;i<nums.length-1;i++){
        if(nums[i]!=nums[i+2]){
            nums[j]=nums[i];
            j++;
        }
    }
    nums[j]=nums[nums.length-1];
    return j+1;
};
