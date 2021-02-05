var RecentCounter = function() {
    this.queue = [];
};

// tc: O(n) n: timeout request
// sc: O(n) n: queue length

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    // if (!!queue[0] && t - queue[0] > 3000) {
    while(!!this.queue[0] && t - this.queue[0] > 3000) {
        this.queue.shift();
    }
    return this.queue.length;
};