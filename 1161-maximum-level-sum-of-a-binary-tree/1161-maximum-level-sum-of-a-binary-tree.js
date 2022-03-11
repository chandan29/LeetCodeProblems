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
 * @return {number}
 */
var maxLevelSum = function(root) {
    let maxVal = Number.NEGATIVE_INFINITY;
    let level = -1;
    if(!root){
        return level;
    }
    
    let queue = [root,'s'];
    let total = 0;
    let currLevel = 1;
    while(queue.length>1){
        let curr = queue.shift();
        
        if(curr==='s'){
            if(total> maxVal){
                maxVal = total;
                level = currLevel;
            }
            total = 0;
            currLevel++;
            queue.push('s');
            continue;
        }
        
        total += curr.val;
        
        if(curr.left){
            queue.push(curr.left);
        }
        if(curr.right){
            queue.push(curr.right);
        }
    }
    
    if(total > maxVal) {
        level = currLevel;
    }
    
    return level;
};