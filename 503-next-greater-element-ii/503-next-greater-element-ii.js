/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length,
          result = new Array(n),
          stack = [];
    
    for(let i = 2 * n - 1; i >= 0; --i) {
        const num = nums[i % n];
        while(stack.length && stack[stack.length - 1] <= num) {
            stack.pop();
        }
        const nextGreater = stack.length ? stack[stack.length - 1] : -1;
        result[i % n] = nextGreater;
        stack.push(num);
    }
    return result;
};