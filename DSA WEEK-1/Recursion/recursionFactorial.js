function recursiveFact(n) {
  if(n>0)
    return n*recursiveFact(n - 1)
  else
    return 1

}
console.log(recursiveFact(5))//120
//time complexity o(n)