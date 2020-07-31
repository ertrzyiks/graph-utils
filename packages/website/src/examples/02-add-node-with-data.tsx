import React from 'react'
import ExampleGraph from '../components/ExampleGraph/ExampleGraph'
import { getAllNodeIds } from '@ertrzyiks/graph-utils'

// <main>
import { Graph, addNodeInPlace } from '@ertrzyiks/graph-utils'

interface NodeData {
  label: string
}

const init = () => {
  const graph: Graph<NodeData> = {}
  addNodeInPlace(graph, { id: '1', label: 'Node #1' })
  addNodeInPlace(graph, { id: '2', label: 'Node #2' })
  addNodeInPlace(graph, { id: '3', label: 'Node #3' })

  return graph
}
// </main>

const AddNodesExample = () => {
  const graph = init()

  const ids = getAllNodeIds(graph)

  const data = {
    nodes: ids.map(id => ({
      id,
      label: graph[id].label
    })),
    edges: [{ from: '1', to: '2'}, { from: '2', to: '1'}]
  }

  return (
    <ExampleGraph data={data} />
  )
}

export default AddNodesExample
