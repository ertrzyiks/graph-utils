import {Graph} from "../types";

/**
 * Gets a list of ids of all nodes in the graph.
 *
 * @signature getAllNodeIds(graph): NodeId[]
 * @param {Graph} graph The target graph object
 * @return {NodeId[]} A list of all the node ids.
 *
 * @example
 *   const ids = getAllNodeIds(graph)
 */
export function getAllNodeIds<
  NodeData,
  EdgeData
>(
  graph: Graph<NodeData, EdgeData>
) {
  return Object.keys(graph.nodes)
}
