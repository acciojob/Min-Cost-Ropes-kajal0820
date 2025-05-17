function mincost(arr)
function mincost(arr) {
  // Helper class: MinHeap
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    insert(val) {
      this.heap.push(val);
      this.bubbleUp();
    }

    extractMin() {
      const min = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.sinkDown();
      }
      return min;
    }

    size() {
      return this.heap.length;
    }

    bubbleUp() {
      let idx = this.heap.length - 1;
      const element = this.heap[idx];
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        const parent = this.heap[parentIdx];
        if (element >= parent) break;
        this.heap[idx] = parent;
        this.heap[parentIdx] = element;
        idx = parentIdx;
      }
    }

    sinkDown() {
      let idx = 0;
      const length = this.heap.length;
      const element = this.heap[0];

      while (true) {
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        let smallest = idx;

        if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
          smallest = leftIdx;
        }
        if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
          smallest = rightIdx;
        }
        if (smallest === idx) break;

        [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
        idx = smallest;
      }
    }
  }

  const heap = new MinHeap();
  for (const num of arr) {
    heap.insert(num);
  }

  let totalCost = 0;

  while (heap.size() > 1) {
    const first = heap.extractMin();
    const second = heap.extractMin();
    const cost = first + second;
    totalCost += cost;
    heap.insert(cost);
  }

  return totalCost;
}

module.exports = mincost;


module.exports=mincost;
