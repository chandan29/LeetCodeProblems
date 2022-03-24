/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, map = new Map()) {
    if(!node){
        return null;
    }
    
    if(map.has(node)){
        return map.get(node);
    }
    
    var cloned = new Node(node.val,[]);
    map.set(node, cloned);
    
    for (let neighbor of node.neighbors) {
    cloned.neighbors.push(cloneGraph(neighbor, map));
    }
    
    return cloned;
};