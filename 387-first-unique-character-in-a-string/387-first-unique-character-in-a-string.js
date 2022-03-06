/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = {};
    var firstInd = {};
    for(var i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
            firstInd[s[i]] = i;
        }
        else{
            map[s[i]]+=1;
        }
    }
    
    for(let key in map){
        if(map[key]===1){
            return firstInd[key];
        }
    }
    
    return -1;
};