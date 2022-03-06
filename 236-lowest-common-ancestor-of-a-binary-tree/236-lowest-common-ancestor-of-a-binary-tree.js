/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
   let lca = null;
    dfs(root);
    return lca;
    function dfs(root) {
        if (!root) {
            return false;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        let cur = root === p || root === q;
        if ((left && right) || (left && cur) || (right && cur)) {
            lca = root;
        }
        if (lca) {
            return;
        }
        return left || right || cur;
    }
 
};