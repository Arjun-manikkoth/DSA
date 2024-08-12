class Queue{

  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length == 0;
  }

  enqueue(value) {
    this.items.push(value)
    
  }
  dequeue() {
    return this.items.shift()

  }
  peek() {
    return this.items[0]
  }
  print() {
    console.log(this.items.toString())
  }
}
const list = new Queue()

list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
list.print()
console.log(list.dequeue())
console.log(list.peek())