/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(A, B) {
    const nums = [];
	let i = 0;
	let j = 0;

	while (i < A.length || j < B.length) {
		if (A[i] < B[j] || B[j] === undefined) {
			nums.push(A[i]);
			i++;
		} else {
			nums.push(B[j]);
			j++;
		}
	}

	const { length } = nums;

	if (length % 2 !== 0) return nums[Math.floor(length / 2)];
	else return (nums[length / 2 - 1] + nums[length / 2]) / 2;
};