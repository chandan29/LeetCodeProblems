/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    return backtrack(arr,0, {})
};


var backtrack = function(arr, pos, map){
    
    for(let key in map){
        if(map[key]>1){
            return 0;
        }
    }
    
    let best = Object.keys(map).length;
    
    for(let i=pos;i<arr.length;i++){
        let wordArr = arr[i];
        for(let j=0;j<wordArr.length;j++){
            if(!map[wordArr[j]]){
                map[wordArr[j]] = 1;
            }
            else{
                map[wordArr[j]] += 1;
            }
        }
        best = Math.max(best, backtrack(arr,i+1,map));
    
        
        for(let j=0;j<wordArr.length;j++){
            if(map[wordArr[j]]==1){
                delete map[wordArr[j]];
            }
            else{
                map[wordArr[j]]--;
            }
        }
    }
    
    return best;
}