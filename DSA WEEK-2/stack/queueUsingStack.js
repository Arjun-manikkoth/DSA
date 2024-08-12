//queue using two stacks 

class Queue{
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }
  enqueue(el) {
    while(this.stack1.length!=0) {
      this.stack2.push(this.stack1.pop())
    }

    this.stack1.push(el)

    while(this.stack2.length!=0) {
      this.stack1.push(this.stack2.pop())
    }
  }
  dequeue() {
    if (this.stack1.length == 0) {
      console.log("Stack underflow")
      return null;
    }
    return this.stack1.pop();
  }
 
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.dequeue())
console.log(queue.stack1)