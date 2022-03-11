/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = {};
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else{
            map[s[i]]+=1;
        }
    }
    
    for(let i=0;i<t.length;i++){
        if(!map[t[i]]){
            return t[i];
        }
        
        if(map[t[i]]===1){
            delete map[t[i]];
        }
        else{
            map[t[i]]--;
        }
    }
};