/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const mod = 1000000007;
    const powersOf2 = [];
    let powerOf2 = 1;
    for (let i = 0; i < nums.length; i++) {
        powersOf2.push(powerOf2);
        powerOf2 = powerOf2 * 2 % mod;
    }
    
    nums.sort((a,b) => a - b);
    
    let count = 0;
    let j = nums.length - 1;
    for (let i = 0; i < nums.length && nums[i] + nums[i] <= target; i++) {
        while (j && nums[j] + nums[i] > target) j--;
        count = (count + powersOf2[j - i]) % mod;
    }
    return count;
};