class MinHeap {
  constructor() {
      this.data = [];
  }

  getParentIndex(i) {
      return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
      return (i * 2) + 1;
  }

  getRightChildIndex(i) {
      return (i * 2) + 2;
  }

  swap(i1, i2) {
      const temp = this.data[i1];
      this.data[i1] = this.data[i2];
      this.data[i2] = temp;
  }

  push(key) {
      this.data[this.data.length] = key;
      this.heapifyUp();
  }

  heapifyUp() {
      let currentIndex = this.data.length - 1;

      while (this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]) {
          this.swap(currentIndex, this.getParentIndex(currentIndex));
          currentIndex = this.getParentIndex(currentIndex);
      }
  }

  poll() {
      const minValue = this.data[0];
      this.data[0] = this.data[this.data.length - 1];
      this.data.length--;
      this.heapifyDown();
      return minValue;
  }

  heapifyDown() {
      let currentIndex = 0;

      while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
          let smallestChildIndex = this.getLeftChildIndex(currentIndex);

          if (this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
              this.data[this.getLeftChildIndex(currentIndex)] > this.data[this.getRightChildIndex(currentIndex)]) {
              smallestChildIndex = this.getRightChildIndex(currentIndex);
          }

          if (this.data[smallestChildIndex] < this.data[currentIndex]) {
              this.swap(currentIndex, smallestChildIndex);
              currentIndex = smallestChildIndex;
          } else {
              return;
          }
      }
  }
}

const minHeap = new MinHeap();

minHeap.push(25);
minHeap.push(5);
minHeap.push(40);
minHeap.push(70);
minHeap.push(90);
minHeap.push(44);

console.log(minHeap.data.join(","));

let a = [];
a.push(minHeap.poll());
a.push(minHeap.poll());
a.push(minHeap.poll());
a.push(minHeap.poll());
a.push(minHeap.poll());

console.log(a.join(','));
console.log(minHeap.data.join(','));
