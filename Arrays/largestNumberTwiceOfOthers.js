
/*
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var max=0,secondlast=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i];
        }
    }
    var index=nums.indexOf(max);
    nums[index]=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]>secondlast){
            secondlast=nums[i];
        }
    }
    console.log(max);
    console.log(secondlast);
    if((secondlast*2)<=max){
        return index;
    }
    else{
        return -1;
    }
};
