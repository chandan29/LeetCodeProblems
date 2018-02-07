//Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.



/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var num=nums.sort(function(a,b){return a-b});
    for(var i=0;i<num.length;i++){
        if(i!=num[i]){
            return i;
        }
    }
    return num.length;
};
