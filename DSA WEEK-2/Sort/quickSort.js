function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1]
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] > pivot) {
      rightArray.push(arr[i])
    }
    else {
      leftArray.push(arr[i])
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
  
  
}
console.log(quickSort([1, -3, -4, 33, 50, -20]))
//Time complexity
//Best case - O(nlogn) When the pivot element chosen divides the array into equal halves
//Average case - O(nlogn)
//worst case - O(n2) Sorted array is inputed