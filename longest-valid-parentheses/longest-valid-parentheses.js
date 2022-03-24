/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
        const n = s.length;
    const S = [-1];
    let x = 0;
    for (let i = 0; i < n; ++i)
        if (s[i] === '(') 
            S.push(i); // open; mark start index
        else {
            S.pop(); // close; remove a start index
            if (!S.length) 
                S.push(i); // invalid; reset index to new start
            else 
                x = Math.max(x, i - S[S.length - 1]); // valid; save the length
        }
    return x;
};

