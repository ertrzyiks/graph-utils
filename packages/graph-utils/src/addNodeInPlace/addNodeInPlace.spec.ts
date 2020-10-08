import { addNodeInPlace, createGraph } from '../index'

describe('addNodeInPlace', () => {
  it('allows to add a simple node', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1'})

    expect(graph).toMatchObject({
      nodes: {
        1: { id: '1', data: {}, edges: {} }
      }
    })
  })

  it('allows to add a second simple node', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1' })
    addNodeInPlace(graph, { id: '2' })

    expect(graph).toMatchObject({
      nodes: {
        1: { id: '1', data: {}, edges: {} },
        2: { id: '2', data: {}, edges: {} }
      }
    })
  })
})
