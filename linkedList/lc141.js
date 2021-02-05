/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// tc: O(n)
// sc: O(1)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1=head;
    let p2=head;
    while(p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1=== p2) {
            return ture;
        }
    }
    return false;
};