/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }
    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }
    getParentIndex(i) {
        return (i-1) >> 1;  // Math.floor((i-1)/2)
    }
    getLeftIndex(i) {
        return i*2+ 1; 
    }
    getRightIndex(i) {
        return i*2+2;
    }
    shiftUp(index) {
        if (index ==0 ) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
    // tc: O(logk)
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }
    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}
// tc: O(n * log k)
// sc: O(k);
var findKthLargest = function(nums, k) {
    const h = new MiniHeap();
    nums.forEach(n => {
        h.insert(n);
        if (h.size() > k) {
            h.pop();
        }
    });
    return h.peek();
};
