//recursive binary

function recursiveBinarySearch(arr, target) {
  return searchElement(arr,target,0,arr.length-1)
}

function searchElement(arr, target, leftIndex, rightIndex) {

  if (leftIndex > rightIndex)
    return -1
  
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target == arr[middleIndex]) {
    return middleIndex
  }
  if (target < arr[middleIndex]) {
    return searchElement(arr, target, leftIndex, middleIndex - 1)
  }
  else {
    return searchElement(arr,target,middleIndex+1,rightIndex)
  }
}
console.log("The index position is "+ recursiveBinarySearch([-5, 2, 4, 6, 10], 6))
//logarithmic o(log n )