/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxCnt = 0;
    var left = 0;
    var right = 0;
    var map = {};
    
    while(right<s.length){
        map[s[right]] ? map[s[right]]+=1 : map[s[right]] = 1;
        
        while(map[s[right]]>1){
            map[s[left]]-=1;
            left++;
        }
        
        maxCnt = Math.max(maxCnt, right-left + 1);
        right++;
    }
    
    return maxCnt;
};