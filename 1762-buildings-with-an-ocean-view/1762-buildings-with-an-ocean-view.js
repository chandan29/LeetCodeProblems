/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let maxTillNow = -1;
    let op = [];
    if(!heights.length){
        return op;
    }
    op.unshift(heights.length-1);
    maxTillNow = heights[heights.length-1];
    for(let i = heights.length-2; i>=0; i--){
        if(heights[i]>maxTillNow){
            op.unshift(i);
            maxTillNow = heights[i];
        }
    }
    
    return op;
};