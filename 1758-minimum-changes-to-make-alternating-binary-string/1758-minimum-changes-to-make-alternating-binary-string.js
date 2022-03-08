/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let cnt1 = 0;
    let cnt2 = 0;
    let valid = ['',''];
    for(let i=0;i<s.length;i++){
        valid[0]+= i % 2 === 0 ? '0' : '1';
        valid[1]+= i % 2 === 0 ? '1' : '0';
    }
    for(let i=0;i<s.length;i++){
        if(s[i]!==valid[0][i]){
            cnt1++;
        }
        if(s[i]!==valid[1][i]){
            cnt2++;
        }
    }
    if(cnt1<cnt2){
        return cnt1;
    }
    return cnt2;
};