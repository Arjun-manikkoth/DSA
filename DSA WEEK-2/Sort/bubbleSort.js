function bubbleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp;
        temp = arr[i]
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 10, 2, 22, 6, 7]))
//time complexity

// best case - O(n) when the sorted array is inputed.
// worst case - O(n2) when the array is sorted in decreasing order 
// average case - O(n2) The no of comparisons remains same.