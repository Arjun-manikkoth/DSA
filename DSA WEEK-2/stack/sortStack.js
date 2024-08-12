//sort stack using a temp stack

function sortStack(stack) {

  let tempStack = []; 

  if(stack.length<1) {
    console.log("The stack is empty")
    return null;
  }

  while (stack.length != 0) {
    let temp = stack.pop();
    console.log("The temp is" + temp)
  
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
    
      stack.push(tempStack.pop())
      console.log("The temp stack after greater than " + tempStack)
    
    }
    tempStack.push(temp)
  }

  console.log(tempStack)
}
sortStack([4,5,2,1,6])