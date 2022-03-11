/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    let ind = [];
    let max = -1;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j]>max){
                max = mat[i][j];
                ind = [i,j];
            }
        }
    }
    
    return ind;
};