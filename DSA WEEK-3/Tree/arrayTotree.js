class TreeNode {
  constructor(value) {
      this.value = value;
      this.children = [];
  }
}

function arrayToTree(arr) {
  if (arr.length === 0) {
      return null;
  }
  
  let root = new TreeNode(arr[0]);
  let current = root;
  
  for (let i = 1; i < arr.length; i++) {
      let newNode = new TreeNode(arr[i]);
      current.children.push(newNode);
      current = newNode; 
  }
  
  return root;
}

let arr = [2, 5, 8, 9, 10];
let tree = arrayToTree(arr);
console.log(JSON.stringify(tree, null, 2));