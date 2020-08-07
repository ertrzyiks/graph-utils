import { addNodeInPlace, Graph } from '../index'

describe('addNodeInPlace', () => {
  it('allows to add a simple node', () => {
    const graph: Graph = {}
    addNodeInPlace(graph, { id: '1'})

    expect(graph).toEqual({
      1: { edges: {} }
    })
  })

  it('allows to add a second simple node', () => {
    const graph = {}
    addNodeInPlace(graph, { id: '1' })
    addNodeInPlace(graph, { id: '2' })

    expect(graph).toEqual({
      1: { edges: {} },
      2: { edges: {} }
    })
  })
})
