import {addEdgeInPlace, addNodeInPlace, createGraph} from '../'
import { filterNodes } from './filterNodes'

describe('filterNodes', () => {
  it('keeps only selected nodes', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1' })
    addNodeInPlace(graph, { id: '2' })
    addNodeInPlace(graph, { id: '3' })

    const newGraph = filterNodes(graph, node => node.id != '2')
    expect(newGraph.nodes).toEqual({
      '1': {
        id: '1',
        data: {},
        edges: {}
      },
      '3': {
        id: '3',
        data: {},
        edges: {}
      }
    })
  })

  it('cleans up the edges too', () => {
    const graph = createGraph()
    addNodeInPlace(graph, { id: '1' })
    addNodeInPlace(graph, { id: '2' })
    addNodeInPlace(graph, { id: '3' })
    addEdgeInPlace(graph, { from: '1', to: '2' })

    const newGraph = filterNodes(graph, node => node.id != '2')
    expect(newGraph.nodes).toEqual({
      '1': {
        id: '1',
        data: {},
        edges: {}
      },
      '3': {
        id: '3',
        data: {},
        edges: {}
      }
    })
  })
})
