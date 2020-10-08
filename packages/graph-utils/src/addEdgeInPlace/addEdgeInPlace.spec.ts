import { addEdgeInPlace, addNodeInPlace, createGraph } from '../index'

describe('addEdgeInPlace', () => {
  it('allows to add a simple edge', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1' })
    addNodeInPlace(graph, { id: '2'})
    addEdgeInPlace(graph, { from: '1', to: '2' })

    expect(graph).toMatchObject({
      nodes: {
        1: {id: '1', data: {}, edges: {2: {data: {}}}},
        2: {id: '2', data: {}, edges: {}}
      }
    })
  })
})
