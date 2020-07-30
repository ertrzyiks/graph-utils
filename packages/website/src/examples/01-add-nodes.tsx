import React from 'react'
import ExampleGraph from '../components/ExampleGraph/ExampleGraph'
import Grid from '@material-ui/core/Grid';

// <main>
import { Graph, addNodeInPlace } from '@ertrzyiks/graph-utils'

const init = () => {
  const graph: Graph = {}
  addNodeInPlace(graph, { id: '1' })
  addNodeInPlace(graph, { id: '2' })
  addNodeInPlace(graph, { id: '3' })

  return graph
}
// </main>

const AddNodesExample = () => {
  const graph = init()

  const nodes = Object.keys(graph)

  const data = {
    nodes: nodes.map(id => ({
      id,
      label: id
    })),
    edges: [{ from: '1', to: '2'}]
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <pre>{JSON.stringify(graph, null, 2)}</pre>
      </Grid>
      <Grid item xs={6}>
        <ExampleGraph data={data} />
      </Grid>
    </Grid>
  )
}

export default AddNodesExample
