/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    let queue = [];
    queue.push({word: beginWord, pathLen: 1});
    while (queue.length > 0) {
        let {word, pathLen} = queue.shift();
        if (word === endWord) {
            return pathLen;
        }
        for (let i = 0; i < word.length; i++) { 
            let prefix = word.substring(0,i);
            let suffix = word.substring(i+1);
            for (let j = 0; j < 26; j++) {
                let newStr = prefix + String.fromCharCode(97+j) + suffix;
                if (wordSet.has(newStr)) { 
                    queue.push({word: newStr, pathLen: pathLen+1});
                    wordSet.delete(newStr); 
                }
            }
        }
    }
    return 0;
}