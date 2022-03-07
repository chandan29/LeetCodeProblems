var findAllConcatenatedWordsInADict = function(words) {
    let m = new Map(), memo = new Map();
    let res = [];
    for (let i = 0; i < words.length; i++) {
        m.set(words[i], 1);
    }
    for (let i = 0; i < words.length; i++) {
        if (isConcat(words[i], m, memo)) res.push(words[i]);
    }
    return res;
};

function isConcat(word, m, memo) {
    if (memo.has(word)) return memo.get(word);
    for (let i = 1; i < word.length; i++) {
        let prefix = word.slice(0, i);
        let suffix = word.slice(i);
        if (m.has(prefix) && (m.has(suffix) || isConcat(suffix, m, memo))) {
            memo.set(word, true);
            return true;
        }
    }
    
    memo.set(word, false);
    return false;
};
