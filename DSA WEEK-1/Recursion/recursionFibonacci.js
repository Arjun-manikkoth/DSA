//recursion is the funcion which is calling itself,to break down the problem to simple problems.
//there should be a termination condition for recursion or else it will make the loop infinite

//fibonacci using recursion
// 0 1 1 2 3 5 8

function recursionFibonacci(n) {
  if (n == 1) {
    return 0
  }
  else if (n == 2) {
    return 1
  }
  
  return  recursionFibonacci(n-1) + recursionFibonacci(n-2)
}
console.log(recursionFibonacci(1))//0
console.log(recursionFibonacci(2))//1
console.log(recursionFibonacci(3))//1
//time complexity iterative o(2n)