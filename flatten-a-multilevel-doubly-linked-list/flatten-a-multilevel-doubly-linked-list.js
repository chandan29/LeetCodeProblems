/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return head

    let fakeHead = new ListNode(0, null, head, null)
    DFS(fakeHead, head)

    fakeHead.next.prev = null
    return fakeHead.next

    function DFS(prev, curr) {
        // search till the last child node
        if (!curr) return prev
        prev.next = curr
        curr.prev = prev

        // link each other
        const tmp = curr.next
        const tail = DFS(curr, curr.child) // go to the bottom of child
        curr.child = null

        return DFS(tail, tmp)
    }
};