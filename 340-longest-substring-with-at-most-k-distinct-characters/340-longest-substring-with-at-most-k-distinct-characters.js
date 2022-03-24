const lengthOfLongestSubstringKDistinct = (s, k) => {
    if (!s || !k) { return 0; }
    if (s.length <= k) { return s.length; }
    
    let longest = 0, map = new Map(), l = 0, r = 0, n = s.length;
    
    while (r < n) {
        while (r < n && (map.size < k || map.has(s[r]))) {
            let occur = map.get(s[r]) || 0;
            map.set(s[r++], ++occur);
        }
        
        longest = Math.max(longest, r - l);
        
        let leftCh = s[l++], leftOccur = map.get(leftCh);
        
        if (leftOccur === 1) {
            map.delete(leftCh);
        } else {
            map.set(leftCh, --leftOccur);
        }
    }
    
    return longest;
};