let array = [1, 3, 3, 5, 3, 7, 8, 9, 10]
function frequencyElement(arr) {
  arr.sort()
  let el;
  let count = 1;
  let max = 0;
  for (let i = 1; i < arr.length; i++){
    if (arr[i] == arr[i - 1])
      count++;
    if (count > max) {
      max = count;
      el = arr[i - 1];
    }
  }
  
console.log("The count of the element ",el,"will be ",max)

}
frequencyElement(array)