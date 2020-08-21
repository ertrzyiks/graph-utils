import {ClosestPathResults, NodeId} from '../types'

/**
 * Ensures that the provided closest path results object contains information about the given node.
 *
 * @signature assertResultForNodeExists(results, nodeId): void
 * @param {ClosestPathResults} results Object that should contain the node
 * @param {NodeId} nodeId Id of the node for the lookup
 *
 * @example
 *   assertResultForNodeExists(results, '1')
 */
export function assertResultForNodeExists(results: ClosestPathResults, nodeId: NodeId) {
  if (typeof results.data[nodeId] === 'undefined') {
    throw new Error(`Could not locate node with id = ${nodeId} in the given results.`)
  }
}
