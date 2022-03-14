/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(A, lives) {
    let [left, right] = [0, 0];
    let max = 0;
    while (right < A.length) {
        if (A[right] === 0) {
            lives--;
        }
        while (lives < 0) {
            if (A[left] === 0) {
                lives++;
            }
            left++;
        }
        max = Math.max(1+right-left, max);
        right++;
        
    }
    return max;
};