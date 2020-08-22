import { ClosestPathResults, NodeId, assertResultForNodeExists } from '../index'

interface Params {
  to: NodeId
}

/**
 *
 * @signature retrieveClosestPathDistance(results, params): number
 * @param {ClosestPathResults} results A result object returned by findClosestPath function.
 * @param {Params} params
 * @param {NodeId} params.to
 * @return {number}
 *
 * @example
 *   const results = findClosestPaths(graph, {
 *     from: '1',
 *     getDistance: edge => edge.weight
 *   })
 *   const distance = retrieveClosestPathDistance(results, { to: '2' })
 */
export function retrieveClosestPathDistance(results: ClosestPathResults, { to }: Params) {
  assertResultForNodeExists(results, to)
  return results.data[to].distance
}
