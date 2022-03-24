/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var output = [];
    var map = {};
    function backtrack(first){
        if(first === nums.length){
            if(!map[[...nums]]){
                output.push([...nums]);
                map[[...nums]] = 1;
            }
            return;
        }
        for(var index = first;index<nums.length;index++){
            var temp = nums[first];
            nums[first] = nums[index];
            nums[index] = temp;
            backtrack(first+1);
            nums[index] = nums[first];
            nums[first] = temp;
        }
    }
    backtrack(0);
    return output;
};