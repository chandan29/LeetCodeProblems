/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var set = new Set();
    nums.sort(function(a,b){return a-b});
    
    for(var i=0;i<nums.length;i++){
        var low = i+1;
        var high = nums.length-1;
        while(low<high){
            if((nums[i]+nums[low]+nums[high])===0){
                set.add(nums[i]+','+nums[low]+','+nums[high]);
                low++;
                high--;
            }
            else if((nums[i]+nums[low]+nums[high])<0){
                low++;
            }
            else{
                high--;
            }
        }
    }
    var op = Array.from(set);
    for(var i=0;i<op.length;i++){
        op[i] = op[i].split(',');
    }
    return op;
}