/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let pathSigns = new Set();
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                let pathSign = dfsTraversal(grid, i, j, []);
                if (!pathSigns.has(pathSign)) {
                    pathSigns.add(pathSign);
                    count++;
                }
            }
        }
    }
    return count;
};

const dfsTraversal = (grid, row, col, pathSign) => {
    if (row < 0 || row > grid.length-1 || col < 0 || col > grid[0].length-1
       || grid[row][col] === 0) {
        return;
    }
    grid[row][col] = 0;
    let DIRECTIONS = [[-1,0, 'U'],[0,1, 'R'],[1,0, 'D'],[0,-1, 'L']];
    for (let dir of DIRECTIONS) {
        pathSign.push(dir[2]);
        dfsTraversal(grid, row+dir[0], col+dir[1], pathSign);
    }
    return pathSign.join("");
}