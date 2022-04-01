/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let [l, h] = [0, nums.length -1];
    while(l < h) {
        const mid = Math.floor((l+h)/2);
        if(nums[mid] > nums[mid+1]) {
            h = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};