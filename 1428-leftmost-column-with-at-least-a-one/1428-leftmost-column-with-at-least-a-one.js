/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    let [rows,cols] = binaryMatrix.dimensions();
    let row = 0;
    let col = cols - 1;
    
    while(row<rows && col>=0){
        if(binaryMatrix.get(row,col)==0){
            row++;
        }
        else{
            col--;
        }
    }
    if(col===cols-1){
        return -1;
    }
    else{
        return col+1;
    }
};