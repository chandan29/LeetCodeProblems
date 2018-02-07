/*
Sort a linked list in O(n log n) time using constant space complexity.

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
var sortList = function(head) {
    if(!head){
        return [];
    }
    if(head.next==null){
        return head;
    }
    var arr=[];
    var y=head;
    while(y!=null){
        arr.push(y.val);
        y=y.next;
    }
    arr.sort(function(a,b){
        return a-b;
    });
    var i=0;
    var x=head;
    while(x!=null){
        x.val=arr[i];
        i++;
        x=x.next;
    }
    return head;
};
