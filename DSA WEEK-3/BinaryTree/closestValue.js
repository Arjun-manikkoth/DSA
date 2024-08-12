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

  findClosestValue(target) {
    return this.findClosestValueHelper(this.root, target, this.root.value);
  }

  findClosestValueHelper(node, target, closest) {
    if (!node) {
      return closest;
    }
    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value;
    }
    if (target < node.value) {
      return this.findClosestValueHelper(node.left, target, closest);
    } else if (target > node.value) {
      return this.findClosestValueHelper(node.right, target, closest);
    } else {
      return closest;
    }
  }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(5); 
bst.insert(1);
bst.insert(15);
bst.insert(13);
bst.insert(22);
bst.insert(14);

const target = 12;
const closestValue = bst.findClosestValue(target);
console.log(`The closest value to ${target} is ${closestValue}.`); 
