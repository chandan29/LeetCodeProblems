/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2){
        return l1;
    }
    else if(!l1){
        return l2;
    }
    else if(!l2){
        return l1;
    }
    
    var prev = new ListNode(-1);
    var head = prev;
    while(l1 && l2){
        if(l1.val<=l2.val){
            prev.next = l1;
            l1 = l1.next;
        }
        else{
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    if(l1){
        prev.next = l1;
    }
    if(l2){
        prev.next = l2;
    }
    
    return head.next;
};