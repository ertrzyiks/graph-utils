import {Graph, NodeId} from '../types'

type EdgeDefinition<NodeData> = { from: NodeId, to: NodeId } & NodeData

/**
 * Adds a new edge  to the provided graph object by modifying it.
 *
 * @signature addEdgeInPlace(graph, node): void
 * @param {Graph} graph Target graph object
 * @param {EdgeDefinition} edge Edge definition
 * @param {NodeId} edge.from Id of the source node
 * @param {NodeId} edge.to Id of the target node
 * @param {object} edge.rest Custom properties of the edge
 * @example
 *   addEdgeInPlace(graph, { from: '1', to: '2' })
 * @example
 *   addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })
 */
export function addEdgeInPlace<
  NodeData,
  EdgeData
>(
  graph: Graph<NodeData, EdgeData>,
  edge: EdgeDefinition<EdgeData>
) {
  const { from, to, ...data } = edge
  const node = graph.nodes[from]
  node.edges[to] = {
    data: data as unknown as EdgeData
  }
}
