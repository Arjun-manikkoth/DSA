let array = [1, 2, 3, 4, 5, 6, 7]

function medianDelete(arr) {
  let medianIndex = Math.floor(arr.length / 2)
  let newArray = [], i = 0;j=0
  while (i < arr.length) {
    if (i != medianIndex) {
      newArray[j] = arr[i];
      j++;
    }
    i++
}
  return newArray;
}
console.log(medianDelete(array))