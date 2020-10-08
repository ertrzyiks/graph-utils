import { cloneGraph } from './cloneGraph'
import { createGraph, addNodeInPlace, getAllNodeIds } from '../'

describe('cloneGraph', () => {
  it('creates a copy of the graph', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1' })

    const newGraph = cloneGraph(graph)
    addNodeInPlace(newGraph, { id: '2' })

    expect(getAllNodeIds(graph)).toEqual(['1'])
    expect(getAllNodeIds(newGraph)).toEqual(['1', '2'])
  })
})
