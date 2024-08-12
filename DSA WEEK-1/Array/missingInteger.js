let array = [1, 2, 3, 4, 6, 7, 8, 9, 10]

function missingInteger(arr) {
  let integer = 1;
  for (let i = 0; i < arr.length; i++){
    if (integer !== arr[i]) {
      console.log(`The missing number is : ${integer}`)
      return;
    }
    integer++;
  }
}
missingInteger(array);