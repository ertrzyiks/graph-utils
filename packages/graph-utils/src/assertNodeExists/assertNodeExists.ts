import {NodeId, Graph as BaseGraph} from '../types'

/**
 * Ensures that the provided graph object contains information about the given node.
 *
 * @signature assertNodeExists(graph, nodeId): void
 * @param {Graph} graph Object that should contain the node
 * @param {NodeId} nodeId Id of the node for the lookup
 *
 * @example
 *   assertNodeExists(graph, '1')
 */
export function assertNodeExists<
  NodeData,
  EdgeData,
  Graph extends BaseGraph<NodeData, EdgeData>
>(graph: Graph, nodeId: NodeId) {
  if (typeof graph.nodes[nodeId] === 'undefined') {
    throw new Error(`Could not locate node with id = ${nodeId} in the given graph.`)
  }
}
