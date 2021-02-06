/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// tc: O(n^2)
// sc: O(n)
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    return new Set(nums2.filter((n) => set1.has(n)));
};
