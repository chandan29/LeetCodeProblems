/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var st = [];
    
    var map = {
        '{' : '}',
        '[' : ']',
        '(' : ')',
    }
    
    for(var i=0;i<s.length;i++){
        if(map[s[i]]){
            st.push(map[s[i]]);
        }
        else{
            if(!st.length){
                return false;
            }
            if(s[i]!==st.pop()){
                return false;
            }
        }
    }
    
    if(st.length){
        return false;
    }
    else{
        return true;
    }
};