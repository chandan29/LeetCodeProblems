const dfs = (grid, row, col, dp) => {
    if (row >= grid.length || col >= grid[0].length|| grid[row][col] ==1) {
        return 0;
    }
    if (row==grid.length-1 && col == grid[0].length-1) {
        return 1;
    }
    if (dp[row][col] != null) {
        return dp[row][col]
    }
    dp[row][col] = dfs(grid, row+1, col, dp)+ dfs(grid, row, col+1, dp);
    
    return dp[row][col];
}
var uniquePathsWithObstacles = function(grid) {
    const dp = [];
    for(let i=0;i< grid.length;i++) {
        dp[i] = new Array(grid[0].length);
    }
    return dfs(grid, 0, 0, dp);
};