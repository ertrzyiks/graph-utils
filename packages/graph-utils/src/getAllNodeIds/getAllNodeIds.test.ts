import {addNodeInPlace, createGraph, getAllNodeIds} from '../index'

describe('getAllNodeIds', () => {
  xit('returns a list of ids', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})

    expect(getAllNodeIds(graph)).toEqual(['1', '2'])
  })
})
