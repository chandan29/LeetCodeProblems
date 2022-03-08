/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time = 0;
    let len = colors.length; 
    for(let i = len-1;i>=0;i--){
        let curr = colors[i];
        let currVal = neededTime[i];
        let j = i-1;
        while(colors[j]===curr && j>=0){
            if(currVal<neededTime[j]){
                time+=currVal;
                currVal = neededTime[j];
            }
            else{
                time+=neededTime[j];
            }
            j--;
        }
        i = j + 1;
    }
    
    return time;
};