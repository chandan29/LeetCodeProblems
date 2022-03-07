/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(N) {
    if (N === 0) return 0;
    let modulo = 1000000007;
    
    const moves = {
        0: [4, 6],
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [0, 3, 9],
        5: [],
        6: [0, 1, 7],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
    };
    
    let depth = 1;
    let prev = Array(10).fill(1);
    
    while (depth < N) {
        let cur = Array(10).fill(0);
        prev.forEach((p, i) => {
            if (p > 0) {
                for (const num of moves[i]) {
                    cur[num] = (cur[num] + p) % modulo;
                }
            }
        });
    
        prev = cur;
        depth++;
    }
    
    return prev.reduce((a, b) => a + b) % (Math.pow(10, 9) + 7);
};