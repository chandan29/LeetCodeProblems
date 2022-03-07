/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      count += dp[j - 1] * dp[i - j];
    }
    dp[i] = count;
  }
  return dp[n];
};