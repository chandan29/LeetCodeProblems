/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    var temp = [];
    var ind = -2;
    for(var i = 0;i<intervals.length;i++){
        if(newInterval[0]<intervals[i][0]){
            ind = i-1;
            break;
        }
    }
    if(ind == -2){
        intervals.push(newInterval);
    }
    if(ind == -1){
        intervals.unshift(newInterval);
    }
    
    for(var i=0;i<intervals.length;i++){
        temp.push(intervals[i]);
        if(ind === i){
            temp.push(newInterval);
        }
    }
    
    return merge(temp);
    
};

var merge = function(intervals) {
    //intervals.sort(function(a,b){ return a[0] - b[0]});
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