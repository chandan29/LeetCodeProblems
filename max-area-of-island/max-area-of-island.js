/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var maxCount = 0;
    if (!grid || grid.length == 0) {
      return 0;
    }
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[0].length;j++){
            
            if(grid[i][j] == "1"){
                maxCount = Math.max(maxCount, helper(grid,i,j));
            }
        }
    }
    return maxCount;
};

var helper = function(grid,row,col){
    if(row>grid.length -1 || row<0){
        return 0;
    }
    if(col>grid[0].length-1 || col<0){
        return 0;
    }
    if(grid[row][col]=='0'){
        return 0;
    }
    grid[row][col] = '0';
    
    return 1 + helper(grid,row+1,col) + helper(grid,row,col+1) + helper(grid,row-1,col) + helper(grid,row,col-1);
}