import {ExtractEdgeData, NodeId} from '../types'

type EdgeDefinitionOf<Graph> = { from: NodeId, to: NodeId } & ExtractEdgeData<Graph>

/**
 *
 * @param graph Object to be updated
 * @param edge
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
