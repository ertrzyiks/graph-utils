import { addNodeInPlace, addEdgeInPlace, Graph } from './index'

describe('graph', () => {
  it('allows to add a simple node', () => {
    const graph: Graph = {}
    addNodeInPlace(graph, { id: '1'})

    expect(graph).toEqual({
      1: { data: undefined, edges: {} }
    })
  })

  it('allows to add a second simple node', () => {
    const graph = {}
    addNodeInPlace(graph, { id: '1' })
    addNodeInPlace(graph, { id: '2' })

    expect(graph).toEqual({
      1: { data: undefined, edges: {} },
      2: { data: undefined, edges: {} }
    })
  })
})
