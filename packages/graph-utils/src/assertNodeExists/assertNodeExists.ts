import { NodeId } from '../types'

interface Graphlike {
  [index: string]: any
}

export function assertNodeExists(object: Graphlike, nodeId: NodeId) {
  if (typeof object[nodeId] === 'undefined') {
    throw new Error(`Could not locate node with id = ${nodeId} in the given object.`)
  }
}
