
var isValidBST = function(root, min = null, max = null) {
    if(!root){
        return true;
    }
    if(min!==null){
        if(root.val<=min){
            return false;
        }
    }
    
    if(max!==null){
        if(root.val>=max){
            return false;
        }
    }
    
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};