import { NodeId } from '../types'

export function assertNodeExists<Graph>(graph: Graph, nodeId: NodeId) {
  if (typeof graph[nodeId] === undefined) {
    throw new Error(`Could not locate node with id = ${nodeId} in the given graph`)
  }
}
