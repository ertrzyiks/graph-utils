import { getNodeById } from './getNodeById'
import { addNodeInPlace, createGraph } from '../'

describe('getNodeById', () => {
  it('finds an existing node', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1' })

    expect(getNodeById(graph, '1').id).toEqual('1')
  })

  it('throws an exception on missing node', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1' })

    expect(() => { getNodeById(graph, '2' ) }).toThrow('ould not locate node with id = 2 in the given graph.')
  })
})
