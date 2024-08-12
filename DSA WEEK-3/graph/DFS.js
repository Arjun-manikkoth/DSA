function DFS(graph, vertex, visited) {
  visited[vertex] = true;
  console.log(vertex)
  for (let neighbour of graph[vertex]) {
    if (!visited[neighbour]) {
      DFS(graph,neighbour,visited)
    }
  }
}
let graph = {
  'A': ['B', 'C'],
  'B': ['A', 'C'],
  'C': ['A','B']
}
DFS(graph,'B',{})