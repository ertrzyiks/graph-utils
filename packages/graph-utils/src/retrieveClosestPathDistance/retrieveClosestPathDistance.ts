import { ClosestPathResults, NodeId } from '../types'

interface ClosestPathDistanceParams {
  to: NodeId
}

export function retrieveClosestPathDistance(results: ClosestPathResults, params: ClosestPathDistanceParams) {
  const { to } = params
  return results.data[to].distance
}
