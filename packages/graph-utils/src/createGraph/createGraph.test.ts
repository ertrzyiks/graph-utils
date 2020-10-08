import { createGraph } from './createGraph'

describe('createGraph', () => {
  it('creates an empty graph', () => {
    const graph = createGraph()

    expect(graph).toEqual({ nodes: {} })
  })
})
