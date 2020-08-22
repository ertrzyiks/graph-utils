import {Graph, NodeId} from '../types'

type NodeDefinition<NodeData> = { id: NodeId } & NodeData

/**
 * Add a new node to the provided graph object by modifying it.
 *
 * @signature addNodeInPlace(graph, node): void
 * @param {Graph} graph Target graph object
 * @param {NodeDefinition} node Node definition
 * @param {NodeId} node.id Id of the node
 * @param {Record} node.rest Custom properties of the node
 *
 * @example
 *   addNodeInPlace(graph, { id: '1' })
 *
 * @example
 *   addNodeInPlace(graph, { id: '1', label: 'The first node' })
 */
export function addNodeInPlace<
  NodeData,
  EdgeData,
>(
  graph: Graph<NodeData, EdgeData>,
  node: NodeDefinition<NodeData>
) {
  const { id, ...data } = node
  graph.nodes[id] = {
    id: id,
    data: data as unknown as  NodeData,
    edges: {}
  }
}
