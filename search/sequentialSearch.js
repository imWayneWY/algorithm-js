// tc: O(n)
Array.prototype.sequentialSearch = function() {
    for (let i = 0; i< this.length; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
};

const res = [1,2,3,4,5].sequentialSearch(3);
