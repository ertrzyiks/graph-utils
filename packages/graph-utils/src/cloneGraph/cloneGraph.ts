import { Graph } from '../'

/**
 * Creates a copy the graph. The new graph contains all the node and edges from the original graph.
 *
 * @signature cloneGraph(graph): Graph
 * @param {Graph} graph Target graph object to copy
 *
 * @example
 *   const anotherGraph = cloneGraph(graph)
 */
export function cloneGraph<NodeData, EdgeData>(
  graph: Graph<NodeData, EdgeData>
): Graph<NodeData, EdgeData> {
  return {
    nodes: {
      ...graph.nodes
    }
  }
}
