/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

let memo = [];

var findNextValid = function(start, currEnd){
    for(let i=0;i<start.length;i++){
        if(start[i] >= currEnd){
            return i;
        }
    }
    
    return start.length;
}

var findMaxProfit = function(jobs, start, length, position){
    if(position === length){
        return 0;
    }
    
    if(memo[position]!= -1){ //visited
        return memo[position];
    }
    
    let nextValid = findNextValid(start, jobs[position][1]);
    
    let maxProfit = Math.max(findMaxProfit(jobs,start,length, position+1), jobs[position][2] + 
                            findMaxProfit(jobs,start, length, nextValid));
    
    memo[position] = maxProfit;
    return memo[position];
}


var jobScheduling = function(startTime, endTime, profit) {
    let jobs = [];
    for(let i=0;i<startTime.length;i++){
        jobs[i] = [startTime[i],endTime[i],profit[i]];
        memo[i] = -1;
    }
    jobs.sort((a,b)=>{
       return a[0]===a[b] ? a[1]===a[b] ? b[2]-a[2] : a[1] - b[1]  : a[0]-b[0]; 
    });
    
    for(let i=0;i<jobs.length;i++){
        startTime[i] = jobs[i][0];
    }
    return findMaxProfit(jobs, startTime, startTime.length, 0);
};