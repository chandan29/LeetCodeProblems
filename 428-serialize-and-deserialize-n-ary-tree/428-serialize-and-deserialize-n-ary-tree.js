/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
    
    serialize = function(root) {
        if(root == null) return  null
      let queue = [root, null]
      let finalArray = []
      while(queue.length) {
          const front = queue.shift()
          if(!front) {
              finalArray.push(front)
              continue
          }
          finalArray.push(front.val)
          while(front.children.length) {
              queue.push(front.children.shift())
          }
          queue.push(null)
      }
      return finalArray  
    };
	
    deserialize = function(data) {
        if(data == null) return null
        let root = new Node(data.shift(), [])
        let queue = [root]
        let topQueue = null
        while(data.length) {
            const top = data.shift()
            if(top == null) {
                topQueue = queue.shift()
                continue
            }
            let node = new Node(top, [])
            queue.push(node)
            topQueue.children.push(node)
        }
        return root
  
    }
}