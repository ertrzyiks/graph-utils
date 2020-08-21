import {Graph} from "../types";

/**
 * @signature getAllNodeIds(graph): NodeId[]
 * @param {Graph} graph The target graph object
 * @return {NodeId[]} A list of all the node ids.
 */
export function getAllNodeIds<
  NodeData,
  EdgeData
>(
  graph: Graph<NodeData, EdgeData>
) {
  return Object.keys(graph.nodes)
}
