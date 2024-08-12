class Node{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{

  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }

  insert(value) {

    if (this.isEmpty()) {
      this.root = new Node(value)
    }
    else {
    this.insertNode(this.root,new Node(value))
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {

      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left,newNode)
      }

    } else {

      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right,newNode)
      }
      
    }
  }

  search(root, value) {
    if (!root) {
      return false
    } else {
      if (value == root.value) {
        return value;
      } else if (value < root.value) {
       return this.search(root.left,value)
      }
      else {
       return this.search(root.right,value)
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }
  postOrder(root) {
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.value)
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }
  levelOrder() {
    let queue = []
    queue.push(this.root)
    while (queue.length) {
      let temp = queue.shift()
      console.log(temp.value)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left)
  }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    }
    else {
      return this.max(root.right)
    } 
  }
  delete(value) {
    this.root = this.deleteNode(this.root,value)
  }
  deleteNode(root, value) {
    if (!root) {
      return root;
    } if (value < root.left) {
      root.left = this.deleteNode(root.left,value)
    } else if (value > root.right) {
       root.right =  this.deleteNode(root.right,value)
    } else {
      if (!root.left && !root.right) {
        return null;
      } if (!root.left) {
        return root.right;
      } else if(!root.right){
        return root.left;
      }
      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right,root.value)
    }
    return root;
  }  
  
}

const bst = new BinarySearchTree()
bst.insert(4)
bst.insert(7)
bst.insert(2)
bst.insert(18)
bst.insert(14)
bst.insert(6)
console.log("search",bst.search(bst.root,4))
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))
bst.delete(2)