// What is a graph?

//   Graph is a non - linear datastructure which consist of a collection
//  of nodes connected by edges which is used to represent different entities.Graph

//adjacency list

class Graph{
  constructor() {
    this.adjacencyList={}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {

    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);

  }
  hasEdge(vertex1,vertex2) {
    if (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)) {
      return true;
    } else {
      return false;
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
    
  }
  removeVertex(vertex) {
      
    for (let adjacentVertex of this.adjacencyList[vertex]) {
         this.removeEdge(vertex,adjacentVertex)
    }
    delete this.adjacencyList[vertex];
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex +'-->' + [...this.adjacencyList[vertex]])
    }
  }
}
let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'D')
graph.display()
console.log(graph.hasEdge('A', 'D'))
graph.removeEdge('A', 'D')
graph.display()