/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var prev = new ListNode(0, head);
    var copy = prev;
    var map = {};
    while(head){
        if(head.next){
            if(head.val === head.next.val){
                map[head.val] = 1;
                head = head.next;
                continue;
            }
            else if(map[head.val]){
                head = head.next;
                continue;
            }
            else{
                copy.next = head;
                copy = copy.next;
            }
        }
        else{
            if(map[head.val]){
                copy.next = null;
                break;
            }
            copy.next = head;
            copy = copy.next;
        }
        
        head = head.next;
    }
    
    return prev.next;
};