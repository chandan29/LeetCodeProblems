/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map = {}, sLen = s.length, pLen = p.length, res = [];
    let left = 0, matched = 0;
    for(const i of p){
        if(!map[i]) map[i] = 1;
        else map[i]++;
    }
    for(let right = 0; right < sLen; right++){
        const char = s[right];
        if(map[char] !== undefined){
            map[char]--;
            if(map[char] === 0){
                matched++;
            }
        }
        if(matched === Object.keys(map).length){
            res.push(right - pLen + 1);
        }
        
        if(right - left + 1 > pLen - 1){
            const leftChar = s[left];
            if(map[leftChar] !== undefined){
                if(map[leftChar] === 0){
                    matched--;
                }
                map[leftChar]++;
            }
            left++;
        }
    }
    return res;
};