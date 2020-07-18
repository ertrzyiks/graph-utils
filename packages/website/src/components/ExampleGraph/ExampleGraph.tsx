import React from 'react'
import { Graph } from 'react-d3-graph'

export default function MyGraph() {
  const myConfig = {
    staticGraph: true,
    nodeHighlightBehavior: false,
    node: {
      color: "lightgreen",
      size: 300,
      fontSize: 16
    },
    link: {
      highlightColor: "lightblue",
    },
  }

  const data = {
    nodes: [{ id: "Harry", x: 50, y: 50 }, { id: "Sally", x: 50, y: 100 }, { x: 50, y: 150, id: "Met" }],
    links: [
      { source: "Harry", target: "Sally" },
      { source: "Harry", target: "Met" },
    ],
  }

  return (
    <Graph
      id="graph-id"
      data={data}
      config={myConfig}
    />
  )
}
