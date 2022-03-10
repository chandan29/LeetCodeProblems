/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
   if(!matrix.length) return 0;
    
    let maxDim = 0;
    let grid = [];
    
    for (let i = 0; i <= matrix.length; i++) {
        grid[i] = [];
        for (let j = 0; j <= matrix[0].length; j++) {
            // edge cases
            if (i === 0 || j === 0) {
                grid[i][j] = 0;
                continue;
            }
            if (matrix[i-1][j-1] === "0") {
                grid[i][j] = 0;
            } else {
                grid[i][j] = 1 + Math.min(grid[i-1][j], grid[i][j-1], grid[i-1][j-1]);
                maxDim = Math.max(grid[i][j], maxDim);
            }
            
        }
    }
    return maxDim*maxDim;
};