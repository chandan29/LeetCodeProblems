/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const res = [];
    
    const dfs = (pos, exp, result, prevNum) => {
        
        if(pos >= num.length) {
            if (result == target) {
                res.push(exp);
            }
            return;
        }
        for(let i=pos;i<num.length;i++) {
            if (i > pos &&  num[pos] == '0') break;
            const n = parseInt(num.substring(pos, i+1));
            if (pos == 0) {
                dfs(i+1, n+"", n, n);
            } else {
                dfs(i+1, exp+'+'+n, result+n, n);
                dfs(i+1, exp+'-'+n, result-n, -n);
                dfs(i+1, exp+'*'+n, result-prevNum+prevNum *n  , prevNum * n);
                
            }
        }
    }
    
    dfs(0, '', 0, 0);
       
    return res;
};