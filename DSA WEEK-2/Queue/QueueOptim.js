class Queue{
  constructor() {
    this.items = {}
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    let element = this.items[this.front];
    delete this.items[this.front]
    this.front++;
    return element;
  }
  peek() {
    return this.items[this.front]
  }
  print() {
    let i;
    let string = '';
    for (i = this.front; i < this.rear; i++){
      string+=this.items[i]+' '
    }
    console.log(string)
  }
}
let list = new Queue()

list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
console.log(list.dequeue(3))
console.log(list.peek())
list.print()