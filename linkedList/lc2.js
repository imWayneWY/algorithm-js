/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// tc: O(n)
// sc: O(n)
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let res = new ListNode(0);
    let p3 = res;
    let carry = 0;
    while(p1 || p2) {
        const v1 = p1 ? p1.val : 0;
        const v2 = p2 ? p2.val : 0;
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        p3.next = new ListNode(val % 10);
        p3 = p3.next;
        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
    }
    if (carry) {
        p3.next = new ListNode(1);
    }
    return res.next;
};