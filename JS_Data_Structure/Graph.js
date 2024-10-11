//Adjacency Matrix 

// const matrix = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
// ] 
// console.log(matrix[0][1]);

// // Adjacency List

// adjacencyList = {
//     'A' : ['B'],
//     'B' : ['A', 'C'],
//     'C' : ['B']
// }

// console.log(adjacencyList['C']);

//to add graph and vertices

class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1, vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    //has is built in method in Set data structure 
    print(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " --> " + 
                [...this.adjacencyList[vertex]]);
        }
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B')
graph.addEdge('A','C')
// graph.addEdge('B','C')

// graph.print()
graph.removeEdge('B','C')
// graph.removeVertex('C')
graph.print()
// console.log(graph.hasEdge('A','B'));
// console.log(graph.hasEdge('C','C'));

