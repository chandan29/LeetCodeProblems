/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    var maxTillNow = 0;
    var op = [];
    for(var i=heights.length-1;i>=0;i--){
        if(heights[i]>maxTillNow){
            op.push(i);
            maxTillNow = heights[i];
        }
    }
    
    return op.reverse();
};