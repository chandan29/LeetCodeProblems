/*
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
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
    public boolean isPalindrome(ListNode head) {
        int[] arr=new int[200000];
        int x=0;
        while(head!=null){
            arr[x]=head.val;
            head=head.next;
            x++;
        }
        for(int i=0;i<x/2;i++){
            if(arr[i]==arr[x-1-i]){
                continue;
            }
            else{
                return false;
            }
        }
        return true;
    }


}
