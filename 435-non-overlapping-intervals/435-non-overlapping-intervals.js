/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(!intervals || !intervals.length){
        return 0;
    }
    intervals.sort(function(a,b){return a[0]-b[0]});
    var dp = [];
    var ans = 1;
    dp[0] = 1;
    
    for(var i=1;i<intervals.length;i++){
        var max = 0;
        for(var j=i-1;j>=0;j--){
            if(intervals[j][1] <= intervals[i][0]){
                max = Math.max(dp[j],max);
                break;
            }
        }
        dp[i] = max + 1;
        ans = Math.max(ans,dp[i]);
    }
    
    return intervals.length - ans;
    
};