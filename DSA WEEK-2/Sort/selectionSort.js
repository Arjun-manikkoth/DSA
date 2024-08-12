const array = [10, 9, 6, 5, 4, 11]

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++){

    let temp ;
    let min = arr[i]
    let index =i;

    for (let j = i + 1; j < arr.length; j++) {
      
      if (arr[j]<min) {
        min = arr[j];
        index = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  return arr;
}
console.log(selectionSort(array))
//Time complexity
//Best case - O(n2) When the pivot element chosen divides the array into equal halves
//Average case - O(n2)
//worst case - O(n2) Sorted array is inputed