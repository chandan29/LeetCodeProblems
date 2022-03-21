/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    var first = null;
    var last = null;
    preOrder(root);
    function preOrder(root){
        if(!root){
            return;
        }
        preOrder(root.left);
        if(last){
            last.right = root;
            root.left = last;
        }
        else{
            first = root;
        }
        last = root;
        preOrder(root.right);
    }
    
    if(first){
        first.left = last;
        last.right = first;
    }
    
    return first;
};