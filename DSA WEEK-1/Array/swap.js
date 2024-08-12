//swap the last and first element of the array
let array = [1, 2, 3, 4, 5, 6]
function swap(arr) {
  let len = arr.length;
  let temp;
  temp = arr[0];
  arr[0] = arr[len - 1];
  arr[len - 1] = temp;
  console.log(arr)
}
swap(array);

