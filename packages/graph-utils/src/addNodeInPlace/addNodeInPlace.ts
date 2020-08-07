import {ExtractNodeData, NodeId} from '../types'

export function addNodeInPlace<Graph>(
  graph: Graph,
  node: { id: NodeId } & ExtractNodeData<Graph>
) {
  const { id, ...data } = node

  graph[id] = {
    ...data,
    edges: {},
  }

  return graph
}
