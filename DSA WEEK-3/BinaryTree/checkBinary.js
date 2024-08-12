class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  isValidBST() {
    return this.isValidBSTHelper(this.root, -Infinity, Infinity);
  }

  isValidBSTHelper(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.value <= min || node.value >= max) {
      return false;
    }
    return (
      this.isValidBSTHelper(node.left, min, node.value) &&
      this.isValidBSTHelper(node.right, node.value, max)
    );
  }
  
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(1);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log(bst.isValidBST()); 

// const invalidBST = new BinarySearchTree();
// invalidBST.root = new TreeNode(10);
// invalidBST.root.left = new TreeNode(5);
// invalidBST.root.right = new TreeNode(15);
// invalidBST.root.left.left = new TreeNode(1);
// invalidBST.root.left.right = new TreeNode(12); 

// console.log(invalidBST.isValidBST()); 
