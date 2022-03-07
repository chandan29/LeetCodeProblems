/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = [];
    for(let i=0;i<=n;i++){
        dp[i] = 0;
    }
    
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i=2;i<n+1;i++){
        for(let j=1;j<=i;j++){
            dp[i] += dp[j-1] * dp[i-j];
        }
    }
    
    return dp[n];
};