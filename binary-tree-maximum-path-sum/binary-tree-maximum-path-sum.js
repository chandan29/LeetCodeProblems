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
var maxPathSum = function(root) {
    if(!root){
        return 0;
    }
    var sum = Number.NEGATIVE_INFINITY;
    
    function helper(root){
        if(!root){
        return 0;
        }
        var l=helper(root.left);
        var r=helper(root.right);
        if(l<0){
            l=0;
        }
        if(r<0){
            r=0;
        }
        sum = Math.max(sum,l+r+root.val);
        
        return root.val+Math.max(l,r);
        
    }
    
    helper(root);
    return sum;
};