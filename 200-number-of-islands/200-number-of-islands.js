/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[0].length;j++){
            if(grid[i][j]==='1'){
                count++;
                helper(grid,i,j);
            }
        }
    }
    
    return count;
};


var helper = function(grid, row, col){
    if(row<0 || row>=grid.length || col<0 || col>=grid[0].length || grid[row][col]==='0'){
        return;
    }
    grid[row][col] = '0';
    
    helper(grid,row+1,col);
    helper(grid,row-1,col);
    helper(grid,row,col+1);
    helper(grid,row,col-1);
    
}

