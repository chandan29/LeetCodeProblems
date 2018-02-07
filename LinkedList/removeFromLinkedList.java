/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
*/


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummy = new ListNode(1);
    ListNode i = dummy;
    ListNode j = head;
    dummy.next = head;

    while(j != null){
        if(j.val == val){
            i.next = i.next.next;
            j = j.next;
        }else{
            i = i.next;
            j = j.next;
        }
    }

    return dummy.next;
    }
}
