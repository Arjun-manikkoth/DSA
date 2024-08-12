//for binary search the array should be sorted
function binarySearch(arr,target) {
   
  let indexRight = arr.length - 1
  let indexLeft = 0

  while (indexLeft <= indexRight) {
    
    let middleIndex = Math.floor((indexLeft + indexRight )/ 2)

    if (target == arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      indexRight = middleIndex - 1
    }
    else {
      indexLeft = middleIndex + 1;
    }
    
  }
  return -1;


}
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
//time complexity  o (log n)