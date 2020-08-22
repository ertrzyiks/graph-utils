# Graph utils

A library that helps to create, modify and analyze directed, finite graphs in Typescript.

The graph object is represented with adjacency list. It's build from a list of nodes (vertices) and edges 
connecting them. Additionally, each node and edge can store a record-like object with their custom properties. 

https://ertrzyiks.github.io/graph-utils/

## Installation

Using Yarn
```
yarn add @ertrzyiks/graph-utils
```

or NPM
```
npm i @ertrzyiks/graph-utils --save
```


## Basic usage

```ts
import { 
  createGraph, 
  addNodeInPlace, 
  addEdgeInPlace 
} from '@ertrzyiks/graph-utils'

const graph = createGraph()

addNodeInPlace(graph, { id: 'node-1' })
addNodeInPlace(graph, { id: 'node-2' })
addNodeInPlace(graph, { id: 'node-3' })

addEdgeInPlace(graph, { from: 'node-1', to: 'node-2' })
addEdgeInPlace(graph, { from: 'node-2', to: 'node-1' })
addEdgeInPlace(graph, { from: 'node-1', to: 'node-3' })
```

See more examples at https://ertrzyiks.github.io/graph-utils/examples
