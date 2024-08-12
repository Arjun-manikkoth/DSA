let string = "hello world";
function reverseWords(str) {
  let array = []
  let tempString = '';
  for (let i = 0; i <= str.length; i++){
    if (str[i] == ' '||i==str.length) {
      array.unshift(tempString);
      tempString =''
    }
    else {
      tempString+=str[i]
    }
  }
  let finalString='';
  for (let i = 0; i <array.length; i++){
    finalString = finalString+array[i]+" "
  }
  console.log(finalString)    
}
reverseWords(string)

