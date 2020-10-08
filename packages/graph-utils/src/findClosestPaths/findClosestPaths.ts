import { Graph, NodeId, ClosestPathData } from '../types'
import { getAllNodeIds } from '../getAllNodeIds'
import { assertNodeExists } from '../assertNodeExists'
import { getNeighboursOf } from '../getNeighboursOf'

interface Params<EdgeData> {
  from: NodeId
  getDistance(edge: EdgeData): number
}

/**
 * Traverses graph and precalculate the closest paths between the source node (starting point) and all other nodes.
 * Use `retrieveClosestPath` and `retrieveClosestPathDistance` to get the details out of the results.
 *
 * @signature findClosestPaths(graph, params): ClosestPathResults
 * @param {Graph} graph
 * @param {Params} params
 * @param {NodeId} params.from The source node
 * @param {(edge: EdgeData) => number} params.getDistance
 * @return {ClosestPathResults}
 *
 * @example
 *   const results = findClosestPaths(graph, {
 *     from: '1',
 *     getDistance: edge => edge.weight
 *   })
 *   const ids = retrieveClosestPath(results, { to: '2' })
 */
export function findClosestPaths<
  NodeData,
  EdgeData
>(
  graph: Graph<NodeData, EdgeData>,
  params: Params<EdgeData>
) {
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

      const neighborDistance = getDistance(graph.nodes[currentNode].edges[nodeId].data)

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
