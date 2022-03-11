/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let arr1 = [];
    let arr2 = [];
    preOrder(root1,arr1);
    preOrder(root2,arr2);
    
    let arr3 = [];
    let oneInd = 0;
    let twoInd = 0;
    while(oneInd<arr1.length && twoInd<arr2.length){
        if(arr1[oneInd]<= arr2[twoInd]){
            arr3.push(arr1[oneInd]);
            oneInd++;
        }
        else{
            arr3.push(arr2[twoInd]);
            twoInd++;
        }
    }
    while(oneInd<arr1.length){
            arr3.push(arr1[oneInd]);
            oneInd++;
    }
    while(twoInd<arr2.length){
        arr3.push(arr2[twoInd]);
        twoInd++;
    }
    return arr3;
    
    function preOrder(root,arr){
        if(!root){
            return arr;
        }
        if(root.left){
            preOrder(root.left,arr);
        }
        arr.push(root.val);
        if(root.right){
            preOrder(root.right,arr);
        }
    }
};