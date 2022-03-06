/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var op = [];
    if(!matrix || !matrix.length){
        return op;
    }
    var rowStart = 0;
    var rowEnd = matrix.length - 1;
    var colStart = 0;
    var colEnd = matrix[0].length - 1;
    
    while(rowStart<=rowEnd && colStart<=colEnd){
        for(var i=colStart;i<=colEnd;i++){
            op.push(matrix[rowStart][i]);
        }
        rowStart++;
        if(rowStart > rowEnd){
            break;
        }
        for(var i=rowStart;i<=rowEnd;i++){
            op.push(matrix[i][colEnd]);
        }
        colEnd--;
        if(colStart > colEnd){
            break;
        }
        
        for(var i=colEnd;i>=colStart;i--){
            op.push(matrix[rowEnd][i]);
        }
        rowEnd--;
        if(rowStart>rowEnd){
            break;
        }
        for(var i=rowEnd;i>=rowStart;i--){
            op.push(matrix[i][colStart]);
        }
        colStart++;
    }
    
    return op;
};