class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

class Tree {
  constructor(value) {
    this.root = new TreeNode(value);
  }

  countNodes(node = this.root) {
    if (!node) return 0;
    let count = 1; 
    for (let child of node.children) {
      count += this.countNodes(child);
    }
    return count;
  }
}

const tree = new Tree('root');
const child1 = new TreeNode('child1');
const child2 = new TreeNode('child2');
tree.root.addChild(child1);
tree.root.addChild(child2);

console.log('Total number of nodes:', tree.countNodes()); 
