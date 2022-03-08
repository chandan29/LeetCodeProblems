/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return [];
    
    const result = [], map = new Map(), steps = new Map();
	
    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const hash = word.substring(0, i) + '*' + word.substring(i + 1);
			
            if (!map.has(hash)) map.set(hash, []);
			
            map.get(hash).push(word);
            steps.set(hash, wordList.length);
        }
    }
    
    const queue = [[beginWord]];
	
    while (queue.length > 0) {
        const current = queue.shift();
        const set = new Set(current); // for O(1) lookup time
        const lastWord = current[current.length - 1];
        if (lastWord === endWord) {
            if (result.length === 0 || current.length === result[0].length)
                result.push(current);
            else break; // early stop because the current path takes longer
        } else {
            for (let i = 0; i < lastWord.length; i++) {
                const hash = lastWord.substring(0, i) + '*' + lastWord.substring(i + 1);
                if (!map.has(hash) || current.length > steps.get(hash))
					continue;
					
                for (const nextWord of map.get(hash))
                    if (!set.has(nextWord)) // don't want to go back to a word already in the path
						queue.push([...current, nextWord]);
						
                steps.set(hash, current.length);
            }
        }
    }
    return result;
};