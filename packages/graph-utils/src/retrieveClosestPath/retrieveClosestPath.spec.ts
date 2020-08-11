import { retrieveClosestPath } from './retrieveClosestPath'
import { Graph } from '../types'
import { addNodeInPlace } from '../addNodeInPlace'
import { addEdgeInPlace } from '../addEdgeInPlace'
import { findClosestPaths } from '../findClosestPaths'

describe('retrieveClosestPath', () => {
  it('allows to retrieve a simple path', () => {
    const graph: Graph<{}, { weight: number }> = {}
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})
    addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })

    const results = findClosestPaths(graph, {
      from: '1',
      getDistance: edge => edge.weight
    })

    const path = retrieveClosestPath(results, { to: '2' })
    expect(path).toEqual(['1', '2'])
  })

  it('allows to retrieve a complex path', () => {
    const graph: Graph<{}, { weight: number }> = {}
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})
    addNodeInPlace(graph, { id: '3'})
    addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })
    addEdgeInPlace(graph, { from: '2', to: '3', weight: 10 })

    const results = findClosestPaths(graph, {
      from: '1',
      getDistance: edge => edge.weight
    })

    expect(retrieveClosestPath(results, { to: '3' })).toEqual(['1', '2', '3'])
  })

  it('returns empty array if there is no path', () => {
    const graph: Graph<{}, { weight: number }> = {}
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})
    addNodeInPlace(graph, { id: '3'})
    addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })

    const results = findClosestPaths(graph, {
      from: '1',
      getDistance: edge => edge.weight
    })

    expect(retrieveClosestPath(results, { to: '3' })).toEqual([])
  })

  it('throws an exception for not existing target', () => {
    const graph: Graph<{}, { weight: number }> = {}
    addNodeInPlace(graph, { id: '1'})
    addNodeInPlace(graph, { id: '2'})
    addEdgeInPlace(graph, { from: '1', to: '2', weight: 10 })

    const results = findClosestPaths(graph, {
      from: '1',
      getDistance: edge => edge.weight
    })

    expect(() => {
      retrieveClosestPath(results, { to: '3' })
    }).toThrowError('Could not locate node with id = 3 in the given object.')
  })

  it('detects loops', () => {
    const results = {
      from: '1',
      data: {
        '1': {
          distance: 1,
          previousNode: '2'
        },
        '2': {
          distance: 1,
          previousNode: '1'
        }
      }
    }

    expect(() => {
      retrieveClosestPath(results, { to: '2' })
    }).toThrowError('Incorrect results! There is an infinite loop in the path.')
  })
})
