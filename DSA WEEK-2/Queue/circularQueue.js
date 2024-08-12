class circularQueue{
  constructor(capacity) {
    this.items = new Array(capacity)
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.currentLength = 0;
    
  }
  isEmpty() {
    
    return this.currentLength == 0
  }
  isFull() {
    return this.currentLength  == this.capacity;
  }
  enqueue(value) {
    if (!this.isFull()) {
      this.rear = (this.rear +1)% this.capacity
      this.items[this.rear] = value;
      this.currentLength++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    let value = this.items[this.front]
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength - 1;

    if (this.isEmpty()) {
      this.front = -1; 
      this.rear = -1;
    }
    return value;
  }
  peek() {
    if (this.isEmpty()) {
      return this.items[this.front];
      
    }
    return null;
  }
  print() {
    if (this.isEmpty()){
      console.log("the queue is empty");
      return null;
    }
    let i;
    let string = '';
    for(i = this.front; i != this.rear; (i + 1) % this.capacity){
      string+=this.items[i]
    }
    string += this.items[i];
    console.log(string)
    
  }
}
const queue = new circularQueue(1)
console.log(queue.isEmpty())
console.log(queue.isFull())
queue.enqueue(1)
console.log(queue.peek())
queue.print()