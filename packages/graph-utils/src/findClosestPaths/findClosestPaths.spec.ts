import { addEdgeInPlace } from '../addEdgeInPlace'
import { addNodeInPlace } from '../addNodeInPlace'
import { Graph } from '../types'
import { findClosestPaths } from './findClosestPaths'

describe('findTheClosestPaths', () => {
  it('finds the closest paths in a simple graph', () => {
    const graph: Graph<{}, { weight: number }> = {}
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})
    addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })

    const results = findClosestPaths(graph, {
      from: '1',
      getDistance: edge => edge.weight
    })

    expect(results.from).toEqual('1')
    expect(results.data['1']).toEqual({
      distance: 0,
      previousNode: null
    })
    expect(results.data['2']).toEqual({
      distance: 10,
      previousNode: '1'
    })
  })

  it('finds the closest paths in a complex graph', () => {
    const graph: Graph<{}, { weight: number }> = {}
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})
    addNodeInPlace(graph, { id: '3'})
    addNodeInPlace(graph, { id: '4'})
    addNodeInPlace(graph, { id: '5'})
    addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })
    addEdgeInPlace(graph, { from: '2', to: '3', weight: 15 })
    addEdgeInPlace(graph, { from: '1', to: '3', weight: 1 })
    addEdgeInPlace(graph, { from: '3', to: '4', weight: 2 })
    addEdgeInPlace(graph, { from: '1', to: '4', weight: 5 })
    addEdgeInPlace(graph, { from: '4', to: '5', weight: 6 })
    addEdgeInPlace(graph, { from: '1', to: '5', weight: 12 })

    const results = findClosestPaths(graph, {
      from: '1',
      getDistance: edge => edge.weight
    })

    expect(results.from).toEqual('1')
    expect(results.data['1']).toEqual({
      distance: 0,
      previousNode: null
    })
    expect(results.data['2']).toEqual({
      distance: 10,
      previousNode: '1'
    })
    expect(results.data['3']).toEqual({
      distance: 1,
      previousNode: '1'
    })
    expect(results.data['4']).toEqual({
      distance: 3,
      previousNode: '3'
    })
    expect(results.data['5']).toEqual({
      distance: 9,
      previousNode: '4'
    })
  })
})
