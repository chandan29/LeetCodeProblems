/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var leftMaxTillNow = [];
    var rightMaxTillNow = [];
    var ans = 0;
    if(!height || !height.length){
        return ans;
    }
    leftMaxTillNow[0]= height[0];
    rightMaxTillNow[height.length-1] = height[height.length-1];
    
    for(var i=1;i<height.length;i++){
        leftMaxTillNow[i] = Math.max(leftMaxTillNow[i-1],height[i]);
    }
    
    for(var i=height.length-2;i>=0;i--){
        rightMaxTillNow[i] = Math.max(rightMaxTillNow[i+1],height[i]);
    }
    
    for(var i=1;i<height.length-1;i++){
        ans+= Math.min(leftMaxTillNow[i],rightMaxTillNow[i]) - height[i];
    }
    
    return ans;
};