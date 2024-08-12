//To find the array consists of unique elements 
let array = [1, 2, 3, 6, 4, 7, 8, 9]
function uniqueArray(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] == arr[j]) {
        console.log("The array doesnot contain unique elements");
        return;
      }      
    }
  }
  console.log("The array contains unique elements")
}
uniqueArray(array);