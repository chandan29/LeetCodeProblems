/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    var one = [];
    while(p!==null){
        one.push(p);
        p = p.parent;
    }
    var two = [];
    while(q!==null){
        two.push(q);
        q = q.parent;
    }
    var oneInd = 0;
    var twoInd = 0;
    if(one.length>two.length){
        oneInd += one.length-two.length;
    }
    else{
        twoInd += two.length-one.length;
    }
    
    while(oneInd<one.length && twoInd<two.length){
        if(one[oneInd]===two[twoInd]){
            return one[oneInd];
        }
        oneInd++;
        twoInd++;
    }
    
    return null;
    
}