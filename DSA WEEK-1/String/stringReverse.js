//reverse a string
// let str = "arjun"
// const array = Array.from(str)
// str = array.join('')
// console.log("The reversed string will be: ",str)
function stringReverse(str) {
  let array = []
  for (let i = 0; i < str.length; i++) {
    array[i] = str[i];
  }
  let string = '';
  for (let i = 0, j = array.length - 1; i < Math.floor(array.length / 2); i++, j--) {
    let temp = array[i];
    array[i] = array[j]
    array[j] = temp;
  }
  for (let i = 0; i < array.length; i++) {
    string += array[i]
  }
  console.log(string)
}
stringReverse(str)