/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(!intervals || !intervals.length){
        return 0;
    }
    intervals.sort(function(a,b){return a[1]-b[1]});
    var count = 0;
    var prev = 0;
    
    for(var i=1;i<intervals.length;i++){
        if(intervals[prev][1] > intervals[i][0]){
            count++;
            if(intervals[prev][1]>intervals[i][1]){
                prev = i;
            }
        }
        else{
            prev = i;
        }
    }
    
    return count;
    
};