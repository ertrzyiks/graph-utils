import { ClosestPathResults, NodeId, assertResultForNodeExists } from '../index'

interface Params {
  to: NodeId
}

/**
 *
 * @signature retrieveClosestPathDistance(results, params)
 * @param {ClosestPathResults} results A result object returned by findClosestPath function.
 * @param {Params} params
 * @param {NodeId} params.to
 * @return {number}
 */
export function retrieveClosestPathDistance(results: ClosestPathResults, { to }: Params) {
  assertResultForNodeExists(results, to)
  return results.data[to].distance
}
