/*
Given a linked list, determine if it has a cycle in it.

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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head===null){
        return false;
    }

    var slow=head;
    var fast=head;
    if(head.next!=null && head.next.next!=null){
        slow=head.next;
        fast=head.next.next;
    }
    else{
        return false;
    }
    while(slow!=null && fast!=null){
        if(slow==fast){
            return true;
        }
        if(slow.next){
        slow=slow.next;
        }
        else{
            return false;
        }
        if(fast.next){
        fast=fast.next.next;
        }
        else{
            return false;
        }
    }
    return false;

};
