function stringReversalRecursion(string) {
  if (string =='')
    return '';
  return stringReversalRecursion(string.substring(1))+string.charAt(0)
}
let string='hello'
console.log(stringReversalRecursion(string))