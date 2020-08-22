import { NodeId, Graph } from '../types'
import { assertNodeExists } from '../assertNodeExists/assertNodeExists'

/**
 * Get a list of ids of all nodes in the graph that are neighbours of the target node.
 * To consider a node as a neighbour of the target node there must be an edge from the target node to the node.
 *
 * @signature getNeighboursOf(graph, nodeId): NodeId[]
 * @param {Graph} graph
 * @param {NodeId} nodeId Id of the target node
 * @return {NodeId[]} A list of ids of all the neighbour nodes
 *
 * @example
 *   const ids = getNeighboursOf(graph, '1')
 */
export function getNeighboursOf<
  NodeData,
  EdgeData
>(
  graph: Graph<NodeData, EdgeData>,
  nodeId: NodeId
) {
  assertNodeExists(graph, nodeId)

  return Object.keys(graph.nodes[nodeId].edges)
}
