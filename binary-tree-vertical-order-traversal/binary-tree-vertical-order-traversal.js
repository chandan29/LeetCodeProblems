/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if (!root) { return []; }
    
    let queue = [[0, root]], map = {}, res = [], min = 0, max = 0;
    
    while (queue.length) {
        let [depth, node] = queue.shift();

        if (!map[depth]) { map[depth] = []; }
        
        map[depth].push(node.val);
        
        min = Math.min(min, depth);
        max = Math.max(max, depth);

        if (node.left) { queue.push([depth - 1, node.left]); }
        if (node.right) { queue.push([depth + 1, node.right]); }
    }
    
    for (let i = min; i <= max; i++) {
        res.push(map[i]);
    }
    
    return res;
};