/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = [];
    for(let i=0;i<=amount;i++){
        dp[i] = 0;
    }
    dp[0] = 1;
    
    for(let i=0;i<coins.length;i++){
        for(let j = coins[i];j<=amount;j++){
            dp[j] += dp[j-coins[i]];
        }
    }
    
    return dp[amount];
};