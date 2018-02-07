/*

Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next===null){
        return null;
    }
    var fast=head;
    var slow=head;
    while(n>1){
        fast=fast.next;
        n--;
    }
    var third=head;
    while(fast.next){
        fast=fast.next;
       third=slow;
        slow=slow.next;
    }
    if(third==slow){
        head=head.next;
        return head;
    }
    third.next=slow.next;
    return head;

};
