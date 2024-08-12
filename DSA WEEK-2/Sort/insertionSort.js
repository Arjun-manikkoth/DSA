//insertion sort

function insertionSort(arr) {

  for (let i = 1; i < arr.length ; i++){
     
    let key = arr[i];
    let j = i - 1

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j=j-1;

    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([1, 20, 5, 3, 55, 2]))
//The time compexity
//Best case - O(n) The sorted array is inputed
//Average case - O(n2) The comparisons may be little less and vary wrt to the input so it remians quadratic.
//Worst case - O(n2) This happens when the array is in reverse sorted orders