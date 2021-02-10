/**
 * @param {number} n
 * @return {number}
 */
// tc: O(n)
// sc: O(n)
var climbStairs = function(n) {
    if(n < 2) return 1;
    const dp = [1, 1];
    for (let i = 2; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};
// sc: O(n)
var climbStairs = function(n) {
    if(n < 2) return 1;
    let dp0 = 1;
    let dp1 = 1;
    for (let i = 2; i<=n; i++) {
        const temp = dp0;
        dp0 = dp1;
        dp1 = dp1 + temp;
    }
    return dp1;
};
