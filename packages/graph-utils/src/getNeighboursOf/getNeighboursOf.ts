import { NodeId, Graph } from '../types'
import { assertNodeExists } from '../assertNodeExists/assertNodeExists'

/**
 *
 * @signature getNeighboursOf(graph, nodeId): NodeId[]
 * @param {Graph} graph
 * @param {NodeId} target
 * @return {NodeId[]} A list of ids of all the neighbour nodes
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
