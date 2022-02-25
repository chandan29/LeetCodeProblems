/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var map = {};
    var set = new Set();
    s = s.split(' ');
    
    if(s.length !== pattern.length){
        return false;
    }
    
    for(var i=0;i<pattern.length;i++){
        if(map[pattern[i]]){
            if(map[pattern[i]]!== s[i]){
                return false;
            }
        }
        else{
            if(set.has(s[i])){
                return false;
            }
            map[pattern[i]] = s[i];
            set.add(s[i]);
        }
    }
    
    return true;
};