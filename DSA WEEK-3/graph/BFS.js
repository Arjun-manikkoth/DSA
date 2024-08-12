function BFS(graph, vertex) {
   
  let queue = [vertex]
  let visited = new Set(vertex)

  while (queue.length) {
    let current = queue.shift()
    console.log(current);
    for (let neighbour of graph[current]) {
      if (!visited.has(neighbour)) {
        queue.push(neighbour)
        visited.add(neighbour)
     }
   }
  
  }
  return null;
}

let graph = {
  'A': ['B', 'C'],
  'B': ['A', 'C'],
  'C': ['A','B']
}

console.log(BFS(graph,'B'))