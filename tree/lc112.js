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
 * @param {number} targetSum
 * @return {boolean}
 */
// tc: O(n)
// sc: O(n) || O(logN)
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let res = false;
    const dfs = (p, s) => {
        if (!p.left && !p.right && s===targetSum) {
            res = true;
        }
        if(p.left) dfs(p.left, s+p.left.val);
        if(p.right) dfs(p.right, s+p.right.val);
        
    }
    dfs(root, root.val);
    return res;
};
