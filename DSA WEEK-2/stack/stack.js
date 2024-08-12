class Stack{
  constructor(capacity) {
    this.stack = []
    this.capacity=capacity
  }
  push(element) {
    this.stack.push(element)
  }
  pop() {
    if (this.isEmpty()) {
      console.log("The stack is empty")
      return null;
    }
    return this.stack.pop()
  }
 
  isEmpty() {
    return this.stack.length == 0;
  }
  isFull() {
    return this.stack.length == this.capacity;
  }
  print() {
    if (this.isEmpty()) {
   console.log("The stack is empty")
 }
    let string='';
    for (let i = this.stack.length-1; i >=0 ; i--){
      string +=this.stack[i]+' '
    }
    console.log(string)
    
  }
}
const obj = new Stack(5)
obj.push(5)
obj.print()
console.log(obj.pop())
obj.push(5)
obj.push(7)
obj.print()
console.log(obj.isFull())


