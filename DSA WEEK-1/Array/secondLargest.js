//largest element in the array
let array = [7,8 , 8, 8, 8, 8, 8, 8, 8, 8]

function secondLargestElement(arr) {

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - i; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }
  let secondLargest
  let secondSmallest;

  for (let k = arr.length - 1 ,l=0; k >= 0; k--,l++){
    if (arr[k - 1] < arr[k])
      secondLargest = arr[k - 1]
    if (arr[l + 1] > arr[l])
      secondSmallest = arr[l+1]
  }
  console.log("The second largest and second smallest elements in this array are : ", secondLargest," and ", secondSmallest); 
}
secondLargestElement(array);
