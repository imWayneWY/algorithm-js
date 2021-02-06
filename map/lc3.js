/**
 * @param {string} s
 * @return {number}
 */
// tc: O(n)
// sc: O(m)
var lengthOfLongestSubstring = function(s) {
    let p1=0;
    let res = 0;
    const map = new Map();
    for (let p2=0; p2<s.length; p2++) {
        if (map.has(s[p2]) && map.get(s[p2])>=p1 ) {
            p1 = map.get(s[p2]) + 1;
        }
        res = Math.max(res, p2 - p1 + 1);
        map.set(s[p2], p2);
    }
    return res;
};
