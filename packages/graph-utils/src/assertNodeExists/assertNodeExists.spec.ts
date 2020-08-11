import { assertNodeExists } from './assertNodeExists'
import { Graph } from '../types'
import { addNodeInPlace } from '../addNodeInPlace'
import {findClosestPaths} from "../findClosestPaths";

describe('assertNodeExists', () => {
  describe('when used with a graph', () => {
    it('passes when node exists', () => {
      const graph: Graph = {}
      addNodeInPlace(graph, { id: '1' })
      expect(() => assertNodeExists(graph, '1')).not.toThrow()
    })

    it('fails when node does not exist', () => {
      const graph: Graph = {}
      addNodeInPlace(graph, { id: '1' })
      expect(() => assertNodeExists(graph, '2')).toThrow()
    })
  })

  describe('when used with any key-value object', () => {
    it('passes when node exists', () => {
      expect(() => assertNodeExists({ '1': true }, '1')).not.toThrow()
    })

    it('fails when node does not exist', () => {
      expect(() => assertNodeExists({ '1': true }, '2')).toThrow()
    })
  })
})
