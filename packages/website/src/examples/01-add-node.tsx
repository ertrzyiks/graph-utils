/**
 * Show how to create a node
 *
 * @title Add a new node to the graph
 * @shortTitle Add node
 */
import React from 'react'
import ExampleGraph from '../components/ExampleGraph'
import Preview from '../components/Preview'
import { getAllNodeIds } from '@ertrzyiks/graph-utils'

// <main>
import { createGraph, addNodeInPlace } from '@ertrzyiks/graph-utils'

const graph = createGraph()
addNodeInPlace(graph, { id: '1' })
addNodeInPlace(graph, { id: '2' })
addNodeInPlace(graph, { id: '3' })
// </main>

const Example = () => {
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

export default Example
