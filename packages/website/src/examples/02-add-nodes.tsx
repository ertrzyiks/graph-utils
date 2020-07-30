import React from 'react'
import ExampleGraph from '../components/ExampleGraph/ExampleGraph'

// <main>
import { Graph, addNodeInPlace } from '@ertrzyiks/graph-utils'

const init = () => {
  const graph: Graph = {}
  addNodeInPlace(graph, { id: '1' })
  addNodeInPlace(graph, { id: '2' })
  addNodeInPlace(graph, { id: '3' })

  return graph
}
// </main>

const AddNodesExample = () => {
  const graph = init()

  const nodes = Object.keys(graph)

  const data = {
    nodes: nodes.map(id => ({
      id,
      label: id
    })),
    edges: [{ from: '1', to: '2'}, { from: '2', to: '1'}]
  }

  return (
    <ExampleGraph data={data} />
  )
}

export default AddNodesExample
