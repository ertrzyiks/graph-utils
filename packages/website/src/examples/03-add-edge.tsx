/**
 * @title Add edge
 */
import React from 'react'
import ExampleGraph from '../components/ExampleGraph'
import Preview from '../components/Preview'
import { getAllNodeIds } from '@ertrzyiks/graph-utils'

// <main>
import { createGraph, addNodeInPlace, addEdgeInPlace } from '@ertrzyiks/graph-utils'

const graph = createGraph()
addNodeInPlace(graph, { id: '1' })
addNodeInPlace(graph, { id: '2' })
addNodeInPlace(graph, { id: '3' })

addEdgeInPlace(graph, { from: '1', to: '2' })
addEdgeInPlace(graph, { from: '2', to: '3' })
addEdgeInPlace(graph, { from: '3', to: '2' })
// </main>

const Example = () => {
  const ids = getAllNodeIds(graph)

  const data = {
    nodes: ids.map(id => ({
      id,
      label: id
    })),
    edges: ids.map(id => Object.keys(graph.nodes[id].edges).map(to => ({ from: id, to }))).flat(1)
  }

  return (
    <Preview
      raw={graph}
      visual={<ExampleGraph data={data} />}
    />
  )
}

export default Example
