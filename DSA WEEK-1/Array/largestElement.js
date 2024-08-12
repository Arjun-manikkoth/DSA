//largest element in the array
let array = [7, 6, 5, 1, 2, 3, 8, 6, 7, 1]

function largestElement(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - i; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }

   return arr[arr.length-1]
}
console.log("The largest element in this array is : "+largestElement(array))