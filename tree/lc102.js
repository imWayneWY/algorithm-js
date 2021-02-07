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
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     if (!root) return [];
//     const q = [[root, 0]];
//     const res = [];
//     while (q.length) {
//         const [n, l] = q.shift();
//         res[l]=res[l].length ? [...res[l],n.val] : [n.val]
//         if (!res[l]) {
//             res.push(n.val);
//         } else {
//             res[l] = [n.val];
//         }
//         if (n.left) q.push([left, l+1]);
//         if (n.right) q.push([right, l+1]);
//     }
// };

// tc: O(n)
// sc: O(n)
var levelOrder = function(root) {
    if (!root) return [];
    const q = [root];
    const res = [];
    while (q.length) {
        let len = q.length;
        res.push([]);
        while (len--) {
            const n = q.shift();
            res[res.length-1].push(n.val);
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
    }
    return res;
};
