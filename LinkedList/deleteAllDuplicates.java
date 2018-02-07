/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.*/


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
         if(head==null){
            return null;
        }
        if(head.next==null){
            return head;
        }
       ListNode max=head.next,cur=head;

        while(max!=null){
            if(max.val==cur.val){
                cur.next=max.next;
                max=max.next;
            }
            else{
                cur=cur.next;
                max=max.next;
            }
        }
        return head;

    }
}
