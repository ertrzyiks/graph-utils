import {ExtractEdgeData, NodeId} from '../types'

type EdgeDefinitionOf<Graph> = { from: NodeId, to: NodeId } & ExtractEdgeData<Graph>

/**
 *
 * @param graph Object to be updated
 * @param {NodeId} edge.from
 * @param {NodeId} edge.to
 * @param {object} edge.rest Custom properties of the edge
 *
 * @example
 *   type MyNodeData = {}
 *   type MyEdgeData = { weight: number }
 *
 *   const graph: Graph<MyNodeData, MyEdgeData> = {}
 *
 *   addNodeInPlace(graph, { id: '1' })
 *   addNodeInPlace(graph, { id: '2' })
 *
 *   addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })
 */
export function addEdgeInPlace<Graph>(
  graph: Graph,
  edge: EdgeDefinitionOf<Graph>
) {
  const { from, to, ...data } = edge
  const node = graph[from]
  node.edges[to] = { ...data }
  return graph
}
