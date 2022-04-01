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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var op = [];
    if(!root){
        return op;
    }
    //var arr = [[]];
    var queue = [root,'s'];
    
    let prev = null;
    
    while(queue.length>1){
        var curr = queue.shift();
        if(curr==='s'){
            //arr.push([]);
            queue.push('s');
            op.push(prev.val);
            prev = null;
            continue;
        }
        //arr[arr.length-1].push(curr.val);
        if(curr.left){
            queue.push(curr.left);
        }
        if(curr.right){
            queue.push(curr.right);
        }
        prev = curr;
    }
    if(prev){
        op.push(prev.val);
    }
    /*for(var i=0;i<arr.length;i++){
        op.push(arr[i][arr[i].length-1]);
    }*/
    
    return op;
};