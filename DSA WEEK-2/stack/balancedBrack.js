function balancedBracket(str) {

  let stack = [];
  matchingBrackets = { '}' :'{', ')': '(', "]":"["  }
  
  for (let i = 0; i < str.length; i++){
    
    if (str[i] == '{' || str[i] == "(" || str[i] == '[') {
      stack.push(str[i])
    }
    else if(matchingBrackets[str[i]]!=stack.pop()) {
      return false;
    }
  }
  return stack.length==0;
}
console.log(balancedBracket('{()}'))
