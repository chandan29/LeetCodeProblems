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
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function(root, targetSum){
    var op = [];
    
    function helper(root, targetSum, sum = 0, path = '') {
    if(!root){
        return;
    }
    if(!root.left && !root.right){
        if(sum+ root.val === targetSum){
            var str = path ? path+','+root.val : ''+root.val;
            op.push(str.split(','));
            return;
        }
        else{
            return;
        }
    }
    
    if(root.left){
        left = helper(root.left, targetSum, sum+ root.val, path ? path+','+root.val : ''+root.val);
    }
    if(root.right){
        helper(root.right, targetSum, sum+ root.val, path ? path+','+root.val : ''+root.val);
    }
    
};
    
    helper(root,targetSum, 0, '');
    
    return op;
}
