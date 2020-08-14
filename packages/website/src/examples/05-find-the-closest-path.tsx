/**
 * @title Find the closest path
 */
import React, { useState } from 'react'
import ExampleGraph from '../components/ExampleGraph'
import Preview from '../components/Preview'
import { getAllNodeIds, Graph, addNodeInPlace, addEdgeInPlace } from '@ertrzyiks/graph-utils'

interface EdgeData {
  weight: number
}

const graph: Graph<{}, EdgeData> = {}
addNodeInPlace(graph, { id: '1'})
addNodeInPlace(graph, { id: '2'})
addNodeInPlace(graph, { id: '3'})
addNodeInPlace(graph, { id: '4'})
addNodeInPlace(graph, { id: '5'})
addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })
addEdgeInPlace(graph, { from: '2', to: '3', weight: 15 })
addEdgeInPlace(graph, { from: '1', to: '3', weight: 1 })
addEdgeInPlace(graph, { from: '3', to: '4', weight: 2 })
addEdgeInPlace(graph, { from: '1', to: '4', weight: 5 })
addEdgeInPlace(graph, { from: '4', to: '5', weight: 6 })
addEdgeInPlace(graph, { from: '1', to: '5', weight: 12 })

// <main>
import { findClosestPaths, retrieveClosestPath } from '@ertrzyiks/graph-utils'

const results = findClosestPaths(graph, {
  from: '1',
  getDistance: edge => edge.weight
})

function onNodeClick(id: string) {
  return retrieveClosestPath(results, { to: id })
}
// </main>

const Example = () => {
  const [highlighted, setHighlighted] = useState<string[]|null>()
  const ids = getAllNodeIds(graph)

  const data = {
    nodes: ids
      .map(id => ({
        id,
        label: `Node#${id}`
      }))
      .map(node => {
        if (highlighted && highlighted.includes(node.id)) {
          return { ...node, color: { background: 'green' }, size: 12}
        }

        if (highlighted) {
          return { ...node, opacity: 0.5 }
        }

        return node
      }),
    edges: ids
      .map(id => Object.keys(graph[id].edges).map(to => ({ from: id, to, label: `${graph[id].edges[to].weight}` }))).flat(1)
      .map(edge => {
        if (highlighted) {
          const indexOfFrom = highlighted?.indexOf(edge.from)
          const indexOfTo = highlighted?.indexOf(edge.to)

          if ((indexOfFrom + 1) === indexOfTo) {
            return { ...edge, color: { color: 'green' }, width: 2 }
          }
        }

        return edge
      })
  }

  const handleClick = (id: string | null) => {
    if (id) {
      setHighlighted(onNodeClick(id))
    } else {
      setHighlighted(undefined)
    }
  }

  return (
    <Preview
      raw={graph}
      visual={<ExampleGraph data={data} onClick={handleClick} />}
    />
  )
}

export default Example
