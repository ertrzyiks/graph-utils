import { ClosestPathResults, NodeId } from '../types'
import { assertNodeExists } from '../assertNodeExists'

interface ClosestPathParams {
  to: NodeId
}

export function retrieveClosestPath(results: ClosestPathResults, params: ClosestPathParams): NodeId[] {
  const  { to } = params
  assertNodeExists(results.data, to)

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
