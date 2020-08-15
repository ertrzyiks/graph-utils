import {NodeOf} from '../types'

/**
 * Add a new node to the graph. It modifies the passed graph object.
 * @param graph
 * @param node
 */
export function addNodeInPlace<Graph>(
  graph: Graph,
  node: NodeOf<Graph>
) {
  const { id, ...data } = node

  graph[id] = {
    ...data,
    edges: {},
  }

  return graph
}
