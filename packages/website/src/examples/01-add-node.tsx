import React from 'react'
import ExampleGraph from '../components/ExampleGraph'
import Preview from '../components/Preview'
import { getAllNodeIds } from '@ertrzyiks/graph-utils'

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

  const ids = getAllNodeIds(graph)

  const data = {
    nodes: ids.map(id => ({
      id,
      label: id
    })),
    edges: []
  }

  return (
    <Preview
      raw={graph}
      visual={<ExampleGraph data={data} />}
    />
  )
}

export default AddNodesExample