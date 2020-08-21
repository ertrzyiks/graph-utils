import { addNodeInPlace, assertNodeExists, createGraph } from '../index'

describe('assertNodeExists', () => {
  describe('when used with a graph', () => {
    it('passes when node exists', () => {
      const graph = createGraph()
      addNodeInPlace(graph, { id: '1' })
      expect(() => assertNodeExists(graph, '1')).not.toThrow()
    })

    it('fails when node does not exist', () => {
      const graph = createGraph()

      addNodeInPlace(graph, { id: '1' })
      expect(() => assertNodeExists(graph, '2')).toThrow()
    })
  })
})
