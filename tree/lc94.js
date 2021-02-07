/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     const res = [];

//     const inorder = (p) => {
//         if (!p) return;
//         inorder(p.left);
//         res.push(p.val);
//         inorder(p.right);
//     };
//     inorder(root);
//     return res;
// };
// tc: O(n)
// sc: O(n)
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let p = root;

    while (stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        res.push(n.val);
        p = p.right;
    }
    return res;
};
