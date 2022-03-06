var BSTIterator = function(root) {
    const inorder = [];                      //queue
    getInorderOrder(root, inorder);
    this.inorder = inorder;
};

BSTIterator.prototype.next = function() {
    return this.inorder.shift();
};

BSTIterator.prototype.hasNext = function() {
    return this.inorder.length > 0;
};

function getInorderOrder(root, inorder) {
    if(!root) {
        return;
    }
    getInorderOrder(root.left, inorder);
    inorder.push(root.val);
    getInorderOrder(root.right, inorder);
}