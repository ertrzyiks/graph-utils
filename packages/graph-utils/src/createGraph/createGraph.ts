import { BaseData, Graph } from '../'

/**
 * Initializes an empty graph object without nodes and edges. The two generic parameters allows to constraint the
 * type of custom properties of nodes and edges. Those constraints are respected by other functions.
 *
 * @signature createGraph(): Graph
 * @return {Graph} A new instance of a graph
 *
 * @example
 *   const graph = createGraph()
 *
 * @example
 *   type NodeData = { label: string }
 *   const graph = createGraph<NodeData>()
 *
 * @example
 *   type EdgeData = { weight: number }
 *   const graph = createGraph<{}, EdgeData>()
 *
 * @example
 *   type NodeData = { label: string }
 *   type EdgeData = { weight: number }
 *   const graph = createGraph<NodeData, EdgeData>()
 */
export function createGraph<
  NodeData extends BaseData = {},
  EdgeData extends BaseData = {}
>(): Graph<NodeData, EdgeData> {
  return {
    nodes: {}
  }
}
