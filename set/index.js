// remove duplicate element
const arr = [1,1,2,2];
const arr2 = [...new Set(arr)];

// Judge if element is in the collection
const set = new Set(arr);
const has = set.has(1);

// get Intersection
var intersection = function(nums1, nums2) {
    const set = [...new Set(nums1)];
    return set.filter(n => nums2.includes(n));
};