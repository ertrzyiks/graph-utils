import { ExtractEdgeData, NodeId, ClosestPathData } from '../types'
import { getAllNodeIds } from '../getAllNodeIds'
import { assertNodeExists } from '../assertNodeExists'
import { getNeighboursOf } from '../getNeighboursOf'

interface FindClosestPathsParams<Graph> {
  from: NodeId
  getDistance(edge: ExtractEdgeData<Graph>): number
}

export function findClosestPaths<Graph>(graph: Graph, params: FindClosestPathsParams<Graph>) {
  const { from, getDistance } = params
  assertNodeExists(graph, from)

  const unvisited = getAllNodeIds(graph)

  const data: ClosestPathData = {}
  for (const id of unvisited) {
    data[id] = { distance: Infinity, previousNode: null }
  }

  data[from].distance = 0

  let currentNode: string | null = from

  while (currentNode) {
    const neighbors = getNeighboursOf(graph, currentNode)

    for (const nodeId of neighbors) {
      if (!unvisited.includes(nodeId)) {
        continue
      }

      const neighborDistance = getDistance(graph[currentNode].edges[nodeId])

      if (neighborDistance < data[nodeId].distance) {
        data[nodeId].distance = data[currentNode].distance + neighborDistance
        data[nodeId].previousNode = currentNode
      }

    }

    markAsVisited(unvisited, currentNode)
    currentNode = getNextNode(data, unvisited)
  }

  return {
    from,
    data
  }
}

function markAsVisited(list: NodeId[], nodeId: NodeId) {
  const index = list.indexOf(nodeId)

  if (index > -1) {
    list.splice(index, 1)
  }

  return list
}

function getNextNode(data: ClosestPathData, list: NodeId[]) {
  let value = Infinity
  let nextNodeId: NodeId | null = null

  for (const nodeId of list) {
    if (data[nodeId].distance < value) {
      value = data[nodeId].distance
      nextNodeId = nodeId
    }
  }
  return nextNodeId
}
