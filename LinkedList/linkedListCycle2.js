/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head){
        return null;
    }
    if(head===head.next){
        return head;
    }
    var slow=head;
    var fast=head;
    var cnt=0;
    while(fast.next && fast.next.next){
        slow=slow.next;
        cnt+=1;
        fast=fast.next.next;
        if(slow===fast){
            while(head!=slow){
                head=head.next;
                slow=slow.next;
            }
            return slow;
        }
    }
    return null;
};
