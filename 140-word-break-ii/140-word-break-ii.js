/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    const map = new Map();
    const wb = (str) => {
        if(!str.length) {
            return [[]];
        }
        
        if(map.has(str)) {
            return map.get(str);
        }
        const val = [];
        map.set(str, val);
        for(let e=1; e<=str.length; e++) {
            const currWord = str.slice(0, e);
            if(set.has(currWord)) { 
                const subResult = wb(str.slice(e));
                subResult.forEach((wordArr) => {
                    val.push([currWord, ...wordArr]);
                }); 
            }
        }
        return val;
    };
    const result = wb(s);
    return result.map((val) => {
        return val.join(' ');
    });
};