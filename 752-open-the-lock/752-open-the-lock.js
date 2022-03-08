/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let dead = new Set();
    for(let i=0;i<deadends.length;i++){
        dead.add(deadends[i]);
    }
    
    let queue = [['0000',0]];
    let seen = new Set();
    seen.add('0000');
    while(queue.length){
        let [node, depth] = queue.shift();
        if(node === target){
            return depth;
        }
        if(dead.has(node)){
            continue;
        }
        getNeighbors(node,seen, queue,depth);
        
    }
    
    return -1;
};

var getNeighbors = function(node,seen, queue, depth){
    let op = [];
    for(let i=0;i<node.length;i++){
        let plus = parseInt(node[i]) + 1 > 9 ? 0 : parseInt(node[i]) + 1;
        let minus = parseInt(node[i]) - 1 < 0 ? 9 : parseInt(node[i]) - 1;
        let substr1 = node.substring(0,i) + ''+plus+ node.substring(i+1);
        let substr2 = node.substring(0,i) + ''+minus+ node.substring(i+1);
        
        if(!seen.has(substr1)){
            seen.add(substr1);
            queue.push([substr1, depth+1])
        }
        if(!seen.has(substr2)){
            seen.add(substr2);
            queue.push([substr2,depth+1]);
        }
    }
}