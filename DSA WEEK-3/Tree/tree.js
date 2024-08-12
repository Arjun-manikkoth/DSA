class TreeNode {
  constructor(value) {
      this.value = value;
      this.children = [];
  }
}

class Tree {
  constructor() {
      this.root = null;
  }

    insert(parentValue, value) {
      
        const newNode = new TreeNode(value);
        
      if (this.root === null) {
          this.root = newNode;
      } else {
          
          const parent = this.findBFS(parentValue);
          if (parent) {
              parent.children.push(newNode);
          } else {
              console.log('Parent not found');
          }
        }
        
  }

  
  findBFS(value) {
      const queue = [this.root];
      while (queue.length) {
          const node = queue.shift();
          if (node.value === value) {
              return node;
          }
          for (let child of node.children) {
              queue.push(child);
          }
      }
      return null;
  }

  findDFS(value, node) {
      if (node === null) return null;
      if (node.value === value) return node;
      for (let child of node.children) {
          const result = this.findDFS(value, child);
          if (result) return result;
      }
      return null;
  }

  traverseBFS() {
      const queue = [this.root];
      while (queue.length) {
          const node = queue.shift();
          console.log(node.value);
          for (let child of node.children) {
              queue.push(child);
          }
      }
  }

 
  traverseDFS(node = this.root) {
      if (node === null) return;
      console.log(node.value);
      for (let child of node.children) {
          this.traverseDFS(child);
      }
  }
}

const tree = new Tree();
tree.insert(null, 'A'); 
tree.insert('A', 'B');
tree.insert('A', 'C');
tree.insert('B', 'D');
tree.insert('B', 'E');
tree.insert('C', 'F');
tree.insert('C', 'G');

console.log('BFS Traversal:');
tree.traverseBFS();

console.log('DFS Traversal:');
tree.traverseDFS();
