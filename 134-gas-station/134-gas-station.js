/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let start = 0;
    let current = 0;
    let total = 0;
    
    for(let i=0;i<gas.length;i++){
        total+= gas[i] - cost[i];
        current+= gas[i] - cost[i];
        if(current<0){
            current = 0;
            start = i+1;
        }
    }
    
    if(total<0){
        return -1;
    }
    else{
        return start;
    }
};