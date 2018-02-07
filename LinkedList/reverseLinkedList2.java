/*

Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.

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
    public ListNode reverseBetween(ListNode head, int m, int n) {
        if(m==n){
            return head;
        }
        if(head==null){
            return null;
        }
        ListNode min=head,max=head;

        int x=1;
        while(x!=n){
            if(x<m){
            min=min.next;
            }
            max=max.next;
            x++;
        }
        System.out.println("Min is:"+min.val+" Max is:"+max.val);

        int temp=0;
        int loop=(n-m)/2;
        System.out.println(loop);
        for(int i=0;i<=loop;i++){
            if(min==max){
                return head;
            }
            temp=min.val;
            min.val=max.val;
            max.val=temp;
            System.out.println("Min is:"+min.val+" Max is:"+max.val);
             ListNode t=min;
            min=min.next;
            while(t.next!=max){
                t=t.next;
            }
            max=t;
        }
        return head;
    }
}
