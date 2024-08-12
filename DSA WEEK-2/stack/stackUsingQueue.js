class Stack{
  constructor() {
    this.Queue1 = [];
    this.Queue2 = [];
  }
  push(el) {
    while(this.Queue1.length) {
      this.Queue2.push(this.Queue1.shift())
    }
    this.Queue1.push(el)
    while (this.Queue2.length) {
      this.Queue1.push(this.Queue2.shift())
    }

  } pop() {
    return this.Queue1.shift()
  }

  
}
let stack = new Stack()
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.pop()
console.log(stack.Queue1)