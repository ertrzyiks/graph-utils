import {ExtractEdgeData, NodeId} from '../types'

export function addEdgeInPlace<Graph>(
  graph: Graph,
  edge: { from: NodeId, to: NodeId } & ExtractEdgeData<Graph>
) {
  const { from, to, ...data } = edge
  const node = graph[from]
  node.edges[to] = { ...data }
  return graph
}
