import React, { ReactNode } from 'react'
import Typography from "@material-ui/core/Typography"

interface ExampleProps {
  title: string
  sourceCode: string
  children: ReactNode
}

export default function Example({
  title,
  sourceCode,
  children
}: ExampleProps) {
  return <div>
    <Typography variant='h5'>{title}</Typography>
    <div>
      <pre>{sourceCode}</pre>
      {children}
    </div>
  </div>
}
