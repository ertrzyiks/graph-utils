import { addNodeInPlace, getAllNodeIds, Graph } from '../index'

describe('getAllNodeIds', () => {
  it('returns a list of ids', () => {
    const graph: Graph = {}
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})

    expect(getAllNodeIds(graph)).toEqual(['1', '2'])
  })
})
