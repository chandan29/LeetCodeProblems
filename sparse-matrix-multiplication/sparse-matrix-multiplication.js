/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
    let ans = Array(mat1.length).fill(0).map(x => Array(mat2[0].length).fill(0));
    
    
    mat1.forEach((rowElements, rowIndex) => {
        rowElements.forEach((rowElement, elementIndex) => {
            
            if (rowElement) {
                mat2[elementIndex].forEach((colElement, colIndex) => {
                    ans[rowIndex][colIndex] += rowElement * colElement;
                });
            }
        });
    });

    return ans
};