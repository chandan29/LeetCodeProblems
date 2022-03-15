/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length){
        return null;
    }
    if(lists.length === 1){
        return lists[0];
    }
    var init = mergeTwoLists(lists[0],lists[1]);
    
    for(var i=2;i<lists.length;i++){
        init = mergeTwoLists(init,lists[i]);
    }
    
    return init;
};

var mergeTwoLists = function(l1, l2){
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    
    var prev = new ListNode(-1);
    var head = prev;
    while(l1 && l2){
        if(l1.val <=l2.val){
            prev.next = l1;
            prev = l1;
            l1 = l1.next;
        }
        else{
            prev.next = l2;
            prev = l2;
            l2 = l2.next;
        }
    }
    
    if(l1){
        prev.next = l1;
    }
    
    if(l2){
        prev.next = l2;
    }
    
    return head.next;
}