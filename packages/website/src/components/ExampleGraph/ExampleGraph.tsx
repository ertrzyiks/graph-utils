import React, { useLayoutEffect, useRef } from 'react'
import * as vis from 'vis-network'

import { useDefaultConfig } from '../../graphConfig'

export default function ExampleGraph({ data }: { data: any }) {
  const ref = useRef<HTMLDivElement>(null)

  const defaultConfig = useDefaultConfig()

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    let graph = new vis.Network(ref.current, data, {...defaultConfig})

    return () => {
      graph.destroy()
    }
  }, [ref, data])


  return (
    <div ref={ref} style={{ height: 300 }} />
  )
}
