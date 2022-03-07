/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const res = [];
    const wordSet = new Set(wordList);

    let queue = [[beginWord]];
    while (queue.length) {
        const visited = new Set();
        const newQ = [];
        queue.forEach((path) => {
            const curWord = path[path.length - 1];
            for (let i = 0; i < curWord.length; i++) {
                for (let j = 0; j < letters.length; j++) {
                    const newWord = curWord.substring(0, i) + letters[j] + curWord.substring(i+1);
                    if (wordSet.has(newWord)) {
                        const newPath = [...path, newWord];
                        visited.add(newWord);
                        if (newWord === endWord) {
                            res.push(newPath);
                        } else {
                            newQ.push(newPath);
                        }
                    }
                }
            }
        });
        
        if (res.length > 0) return res;
        visited.forEach((value) => {
            wordSet.delete(value);
        });
        queue = newQ;
    }
    
    return res;
};