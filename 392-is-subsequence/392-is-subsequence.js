/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0;
    
    let right = 0;
    
    while(left<s.length && right<t.length){
        if(s[left]===t[right]){
            left++;
        }
        right++;
    }
    
    if(left=== s.length){
        return true;
    }
    
    return false;
};