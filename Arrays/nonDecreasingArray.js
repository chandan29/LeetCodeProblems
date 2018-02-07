/*
Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
var cnt = 0;
	for (var i = 0; i < nums.length-1; i++) {
		if (nums[i+1] < nums[i]) {
            if (nums[i-1] !== undefined && nums[i-1] > nums[i+1]) {
                if (nums[i+2] && nums[i] > nums[i+2]) {
                    return false;
                }
            }
			cnt++;
			if (cnt > 1) {
				return false;
			}
		}
	}
	return true;
};
