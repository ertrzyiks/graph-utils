import {ClosestPathResults, NodeId, assertResultForNodeExists} from '../index'

interface Params {
  to: NodeId
}

/**
 *
 * @signature retrieveClosestPath(results, params): NodeId[]
 * @param {ClosestPathResults} results
 * @param {Params} params
 * @param {NodeId} params.to
 * @return {NodeId[]}
 *
 * @example
 *   const results = findClosestPaths(graph, {
 *     from: '1',
 *     getDistance: edge => edge.weight
 *   })
 *   const ids = retrieveClosestPath(results, { to: '2' })
 */
export function retrieveClosestPath(results: ClosestPathResults, { to }: Params) {
  assertResultForNodeExists(results, to)

  const data = results.data
  const path = [] as string[]
  let currentNode: string | null = to

  if (!data[currentNode].previousNode) {
    return path
  }

  const max = Object.keys(data).length
  let i = 0
  while (currentNode) {
    path.push(currentNode)
    currentNode = data[currentNode].previousNode

    i++

    if (i > max) {
      throw new Error('Incorrect results! There is an infinite loop in the path.')
    }
  }

  return path.reverse()
}
