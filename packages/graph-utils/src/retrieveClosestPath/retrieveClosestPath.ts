import { ClosestPathResults, NodeId } from '../types'

export function retrieveClosestPath(results: ClosestPathResults, { to }: { to: NodeId }) {
  const data = results.data
  const path = []
  let currentNode: string | null = to

  const max = Object.keys(data).length
  let i = 0
  while (currentNode) {
    path.push(currentNode)
    currentNode = data[currentNode].previousNode

    i++

    if (i > max) {
      break
    }
  }

  return path.reverse()
}
