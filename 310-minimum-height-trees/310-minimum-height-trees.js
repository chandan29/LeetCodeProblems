/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n == 1) return [0];
    
    let adj = [];
    
    for (let i = 0; i < n; i++) {
        adj[i] = new Set();
    }
    
    for (let [i,j] of edges) {
        adj[i].add(j);
        adj[j].add(i);
    }
    
    
    let leaves = [];
    
    for (let i = 0; i < n; i++) {
        if (adj[i].size == 1) {
            leaves.push(i);
        }
    }
    
    while (n > 2) {
        n -= leaves.length;
        let newLeaves = [];
        
        for (let i=0;i<leaves.length;i++) {
            let j = Array.from(adj[leaves[i]])[0];
            adj[j].delete(leaves[i]);
            
            if (adj[j].size == 1) {
                newLeaves.push(j);
            }
        }
        
        leaves = newLeaves;
    }
    
    return leaves;
};