/**
 * @title Add node with data
 */
import React from 'react'
import ExampleGraph from '../components/ExampleGraph/ExampleGraph'
import { getAllNodeIds } from '@ertrzyiks/graph-utils'
import Preview from '../components/Preview'

// <main>
import { createGraph, addNodeInPlace } from '@ertrzyiks/graph-utils'

interface NodeData {
  label: string
}

const graph = createGraph<NodeData>()
addNodeInPlace(graph, { id: '1', label: 'Node #1' })
addNodeInPlace(graph, { id: '2', label: 'Node #2' })
addNodeInPlace(graph, { id: '3', label: 'Node #3' })
// </main>

const Example = () => {
  const ids = getAllNodeIds(graph)

  const data = {
    nodes: ids.map(id => ({
      id,
      label: graph.nodes[id].data.label
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

export default Example
