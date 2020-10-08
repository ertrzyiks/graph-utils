import { Graph, NodeId, assertNodeExists} from '../'

/**
 * Create a copy the graph. The new graph contains all the node and edges from the original graph.
 *
 * @signature getNodeById(graph, id): GraphNode
 * @param {Graph} graph Target graph object
 * @param {NodeId} id Id of the node to look up
 *
 * @example
 *   const graph = createGraph()
 *   addNodeInPlace(graph, { id: '1' })
 *
 *   const node = getNodeById(graph, '1')
 */
export function getNodeById<
  NodeData,
  EdgeData
>(graph: Graph<NodeData, EdgeData>, id: NodeId) {
  assertNodeExists(graph, id)
  return graph.nodes[id]
}
