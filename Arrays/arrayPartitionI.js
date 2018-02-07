
/*Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn)
which makes sum of min(ai, bi) for all i from 1 to n as large as possible.*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var a1=[];
    var a2=[];
    var cnt=0;
    nums.sort(function(a,b){return a-b});
    for(var i=0;i<nums.length;i=i+2){
            a1.push(nums[i]);
            a2.push(nums[i+1]);
    }
    for(var i=0;i<a1.length;i++){
        if(a1[i]>a2[i]){
            cnt+=a2[i];
        }
        else{
            cnt+=a1[i];
        }
    }
    return cnt;
};
