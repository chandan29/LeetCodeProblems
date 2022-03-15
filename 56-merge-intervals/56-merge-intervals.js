/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort(function(a,b){ return a[0] - b[0]});
    var op = [];
    for(var i=0;i<intervals.length-1;i++){
        if(intervals[i][1]>=intervals[i+1][0]){
            intervals[i+1][0] = intervals[i][0];
            intervals[i+1][1] = intervals[i+1][1]> intervals[i][1] ? intervals[i+1][1] : intervals[i][1];
        }
        else{
            op.push(intervals[i]);
        }
    }
    op.push(intervals[intervals.length-1]);
    return op;
};