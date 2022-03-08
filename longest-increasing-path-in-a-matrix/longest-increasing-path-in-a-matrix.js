/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const dp = new Array(matrix.length);
    
    for(let i = 0; i < matrix.length; i++)dp[i] = new Array(matrix[0].length).fill(0); 
    let max = 0;
	
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            max = Math.max(max, dfs(i,j));
        }
    }
    function dfs(x,y){
		
        if(dp[x][y] === 0){
            dp[x][y] = 1;
			if(x > 0 && matrix[x][y] < matrix[x-1][y]) dp[x][y] = Math.max(dp[x][y], dfs(x-1, y)+1);
            if(x < matrix.length - 1 && matrix[x][y] < matrix[x+1][y]) dp[x][y] = Math.max(dp[x][y], dfs(x+1, y)+1);
            if(y > 0 && matrix[x][y] < matrix[x][y-1]) dp[x][y] = Math.max(dp[x][y], dfs(x, y-1)+1);
            if(y < matrix[0].length - 1 && matrix[x][y] < matrix[x][y+1]) dp[x][y] = Math.max(dp[x][y], dfs(x, y+1)+1);
        }
        return dp[x][y]
    }
    return max
};