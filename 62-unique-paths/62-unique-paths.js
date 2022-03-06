/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var dp = {};
var uniquePaths = function(m, n) {
    if(dp[m+','+n]){
        return dp[m+','+n];
    }
    if(m===1 || n===1){
        return 1;
    }
    dp[m+','+n] = uniquePaths(m-1,n) + uniquePaths(m,n-1);
    return dp[m+','+n];
};