/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, target) {
    var cnt = 0;
    var sum = 0;
    var map={};
    map[0]=1;
    for(var i=0;i<nums.length;i++){
        sum+=nums[i];
        if(map[sum-target]){
            cnt+= map[sum-target];
        }
        if(map[sum]){
            map[sum]+=1;
        }
        else{
            map[sum] = 1;
        }
    }
    
    return cnt;
};