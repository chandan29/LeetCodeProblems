/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums    
};

Solution.prototype.pick = function(target) {
    if (this.nums.length === 1) return 0
    let count = 0
    let result = 0
    for (let i=0; i<this.nums.length; i++) {
        if(this.nums[i] === target && Math.floor(Math.random() * ++count) === 0) {
            result = i
        }
    }
    return result
};