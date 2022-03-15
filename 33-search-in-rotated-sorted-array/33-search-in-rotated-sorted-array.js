/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var min = findMinIndex(nums);
    if(nums[min]===target){
        return min;
    }
    if(nums[nums.length-1] < target){
        return binSearch(nums, target, 0 , min-1);
    }
    else{
        return binSearch(nums, target, min+1, nums.length-1);
    }
};

var binSearch = function(nums, target, low, high){
    var mid = Math.ceil((low+high)/2);
    
    if(nums[mid] === target){
        return mid;
    }
    if(low>=high){
        return -1;
    }
    if(nums[mid] < target){
            return binSearch(nums,target, mid + 1, high);
    }
    if(nums[mid] > target){
        return binSearch(nums, target, low, mid - 1);
    }
}

var findMinIndex = function(nums){
    if(nums[0]<=nums[nums.length-1]){
        return 0;
    }
    
    var left = 0;
    var right = nums.length - 1;
    
    while(left<right){
        var mid = Math.ceil((left+right)/2);
        if(nums[mid]>nums[mid+1]){
            return mid+1;
        }
        else if(nums[mid-1]>nums[mid]){
            return mid;
        }
        
        if(nums[mid]> nums[right]){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
}