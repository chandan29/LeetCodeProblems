/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    let a = nums.map((x) => BigInt(x));
  a.sort((a, b) => (a >= b ? -1 : 1));

  return `${a[k - 1]}`;
};