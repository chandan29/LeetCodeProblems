//Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        if(head==null){
            return null;
        }
        ListNode last=head,cur=head;
        int x=1;
        while(last.next!=null){
            x++;
            last=last.next;
        }
        int temp=0;
        int loop=(int)Math.floor(x/2);
        System.out.println(loop);
        for(int i=0;i<loop;i++){
            temp=cur.val;
            cur.val=last.val;
            last.val=temp;
            System.out.println("First "+cur.val+" Last "+last.val);
            ListNode m=cur;
            cur=cur.next;
            while(m.next!=last){
                m=m.next;
            }
            last=m;
        }
        return head;
    }
}
