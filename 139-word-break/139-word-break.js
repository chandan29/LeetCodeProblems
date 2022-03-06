/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var dict = {};
    for(var i=0;i<wordDict.length;i++){
        dict[wordDict[i]] = 1;
    }
    return wordBreakMemo(s,dict,0, {});
};


var wordBreakMemo = function(str, dict, start, map){
    if(start === str.length){
        return true;
    }
    
    if(map[start]!=null){
        return map[start];
    }
    
    for(var end = start+1;end<=str.length;end++){
        if(dict[str.substring(start,end)] && wordBreakMemo(str, dict, end, map)){
            map[start] = true;
            return true;
        }
    }
    map[start] = false;
    
    return false;
}