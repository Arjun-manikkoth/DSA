const array = [5, 3, 4, 1, 2, 9]

function mergeSort(arr) {

  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor((arr.length) / 2)
  const leftArray = arr.slice(0, mid)
  const rightArray = arr.slice(mid)

  return merge(mergeSort(leftArray),mergeSort(rightArray))

}
function merge(leftArray, rightArray) {

  let sortedArray = [];

  while (leftArray.length && rightArray.length) {

    if (leftArray[0] >= rightArray[0]) {

      sortedArray.push(rightArray.shift())
    }
    else {
      sortedArray.push(leftArray.shift())
    }
    
  }
  return [...sortedArray,...leftArray,...rightArray]
 
}
console.log(mergeSort(array))
//Time complexity
//Best case - O(nlogn) When the pivot element chosen divides the array into equal halves
//Average case - O(nlogn)
//worst case - O(nlogn) Sorted array is inputed
//Space complexity
//Linear