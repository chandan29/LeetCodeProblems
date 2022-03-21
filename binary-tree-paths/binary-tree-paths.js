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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var op = [];
    if(!root){
        return op;
    }
    preOrder(root, ''+root.val);
    function preOrder(node, str){
        if(!node.left && !node.right){
            op.push(str);
            return;
        }
        if(node.left){
            preOrder(node.left, str+'->'+node.left.val);
        }
        if(node.right){
            preOrder(node.right, str+'->'+node.right.val);
        }
    }
    
    return op;
};