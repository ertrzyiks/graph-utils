import { Graph, GraphNode, cloneGraph, getAllNodeIds, getNodeById } from '../'

/**
 * Creates a subgraph of the passed graph. The predicate function should return true for nodes that should stay
 * and false for nodes that should be skipped.
 *
 * @signature filterNodes(graph, predicateFn): Graph
 * @param {Graph} graph Target graph object
 * @param {Function} predicateFn A predicate function that returns a boolean value.
 *                               Make it return true to keep the node and false to remove it from the graph.
 *
 * @example
 *   const graph = createGraph()
 *   addNodeInPlace(graph, { id: '1' })
 *   addNodeInPlace(graph, { id: '2' })
 *
 *   const newGraph = filterNodes(graph, node => node.id === '2') // Keep only node with id = '2'
 */
export function filterNodes<NodeData, EdgeData>(
  graph: Graph<NodeData, EdgeData>,
  predicateFn: (node: GraphNode<NodeData, EdgeData>) => boolean
): Graph<NodeData, EdgeData> {
  const newGraph = cloneGraph(graph)
  const ids = getAllNodeIds(newGraph)

  let removedIds = []

  // Drop the filtered nodes
  for (const id of ids) {
    const node = getNodeById(newGraph, id)
    if (predicateFn(node) === false) {
      removedIds.push(id)
      delete newGraph.nodes[id]
    }
  }

  // Then drop all the edges leading to removed nodes
  const remainingIds = getAllNodeIds(newGraph)

  for (const id of remainingIds) {
    const node = getNodeById(newGraph, id)

    for (const removedId of removedIds) {
      if (node.edges[removedId]) {
        delete node.edges[removedId]
      }
    }
  }

  return newGraph
}
