import { ClosestPathResults, NodeId } from '../types'

export function retrieveClosestPath(results: ClosestPathResults, { to }: { to: NodeId }) {
  const path = []
  let currentNode: string | null = to

  while (currentNode) {
    path.push(currentNode)
    currentNode = results.data[to].previousNode
  }

  if (path.length == 1) {
    return null
  }

  return path
}
