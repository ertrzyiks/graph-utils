import React, { useLayoutEffect, useRef } from 'react'
import * as vis from 'vis-network'

import { useDefaultConfig } from '../../graphConfig'

export default function ExampleGraph({ data, onClick }: { data: any, onClick?: (id: string | null) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const graphRef = useRef<vis.Network>()

  const defaultConfig = useDefaultConfig()

  useLayoutEffect(() => {
    const graph = graphRef.current

    if (!graph) {
      return
    }

    graph.setData(data)
  }, [ref, graphRef, data])

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    if (!graphRef.current) {
      graphRef.current = new vis.Network(ref.current, data, {...defaultConfig})

      if (onClick) {
        graphRef.current.on('selectNode', (e) => {
          if (e.nodes.length > 0) {
            onClick(e.nodes[0])
          }
        })

        graphRef.current.on('deselectNode', (e) => {
          onClick(null)
        })
      }
    }

    return () => {
      graphRef.current?.destroy()
      graphRef.current = undefined
    }
  }, [ref, graphRef])


  return (
    <div style={{ height: '100%', maxHeight: 500, border: '1px solid #333333' }}>
      <div ref={ref} style={{ height: 300 }} />
    </div>
  )
}
