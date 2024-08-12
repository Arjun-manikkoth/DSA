function linearSearch(n) {
  let a = [1, 2, 3, 4, 5, 6]
  for (let i = 0; i < n; i++){
    if(n==a[i])
      return i  
  }
  return -1
}
console.log(linearSearch(5))
//time complexity o(n) linear