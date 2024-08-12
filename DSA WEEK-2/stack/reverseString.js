class Stack{
  constructor(capacity) {
    this.stack = [];
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
  peek() {
    
  }
  isEmpty() {
    return this.stack.length == 0;
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

const obj = new Stack()

const string = "Arjun";

function stringRevese(string) {
  let reverse = '';
  
  for (let i = 0; i < string.length; i++){
    
    obj.push(string[i])
  }
  for(let i = 0; i < string.length;i++) {
    reverse += obj.pop();
  }
  return reverse;
  
}
console.log(stringRevese(string))





