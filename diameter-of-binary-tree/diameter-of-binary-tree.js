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
var diameterOfBinaryTree = function(root) {
    var diameter = 0;
    helper(root);
    return diameter;
    function helper(root){
        if(!root){
            return 0;
        }
        
        var left = helper(root.left);
        var right = helper(root.right);
        
        diameter = Math.max(diameter, left + right);
        
        return 1+ Math.max(left,right);
    }
};