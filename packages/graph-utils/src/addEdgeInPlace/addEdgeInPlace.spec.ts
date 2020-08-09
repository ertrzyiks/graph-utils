import { addEdgeInPlace } from '../addEdgeInPlace'
import { Graph } from '../types'

import { addNodeInPlace } from '../addNodeInPlace'

describe('addNodeInPlace', () => {
  it('allows to add a simple edge', () => {
    const graph: Graph = {}
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})
    addEdgeInPlace(graph, { from: '1', to: '2'})

    expect(graph).toEqual({
      1: { edges: { 2: {}} },
      2: { edges: {} }
    })
  })
})
