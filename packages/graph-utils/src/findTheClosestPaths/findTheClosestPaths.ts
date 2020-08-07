import { ExtractEdgeData, NodeId } from '../types'
import { getAllNodeIds } from '../getAllNodeIds/getAllNodeIds'
import { assertNodeExists } from '../assertNodeExists/assertNodeExists'
import { getNeighboursOf } from '../getNeighboursOf'

interface FindTheClosestPathsOpts<Graph> {
  from: NodeId
  getDistance(edge: ExtractEdgeData<Graph>): number
}

interface ClosestPathData {
  [index: string]: { distance: number, previousNode: NodeId | null }
}

export function findTheClosestPaths<Graph>(graph: Graph, { from, getDistance }: FindTheClosestPathsOpts<Graph>) {
  assertNodeExists(graph, from)

  const unvisited = getAllNodeIds(graph)

  const results: ClosestPathData = {}
  for (const id of unvisited) {
    results[id] = { distance: Infinity, previousNode: null }
  }

  results[from].distance = 0

  let currentNode = from

  while (currentNode) {
    const neighbors = getNeighboursOf(graph, currentNode)

    for (const nodeId of neighbors) {
      if (!unvisited.includes(nodeId)) {
        continue
      }

      const neighborDistance = getDistance(graph[currentNode].edges[nodeId])

      if (neighborDistance < results[nodeId].distance) {
        results[nodeId].distance = results[currentNode].distance + neighborDistance
        results[nodeId].previousNode = currentNode
      }

    }

    markAsVisited(unvisited, currentNode)
    currentNode = getNextNode(results, unvisited)
  }

  return {
    from,
    data: results
  }
}

function markAsVisited(list: NodeId[], nodeId: NodeId) {
  const index = list.indexOf(nodeId)

  if (index > -1) {
    list.splice(index, 1)
  }

  return list
}

function getNextNode(results: ClosestPathData, list: NodeId[]) {
  let value = Infinity
  let nextNodeId: NodeId | null = null

  for (const nodeId of list) {
    if (results[nodeId].distance < value) {
      value = results[nodeId].distance
      nextNodeId = nodeId
    }
  }
  return nextNodeId
}
