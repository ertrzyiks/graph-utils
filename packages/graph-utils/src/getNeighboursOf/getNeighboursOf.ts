import { NodeId } from '../types'
import { assertNodeExists } from '../assertNodeExists/assertNodeExists'

export function getNeighboursOf<Graph>(graph: Graph, target: NodeId) {
  assertNodeExists(graph, target)

  return Object.keys(graph[target].edges)
}
