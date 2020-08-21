import { BaseData, Graph } from '../types'

/**
 * @signature createGraph(): Graph
 * @return {Graph}
 */
export function createGraph<
  NodeData extends BaseData = {},
  EdgeData extends BaseData = {}
>(): Graph<NodeData, EdgeData> {
  return { nodes: {} }
}
