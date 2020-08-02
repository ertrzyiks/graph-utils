import React, { ReactNode, useRef, useLayoutEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Prism from '../../vendor/prism'

interface ExampleProps {
  title: string
  sourceCode: string
  children: ReactNode
}

export default function ExampleContainer({
  title,
  sourceCode,
  children
}: ExampleProps) {
  const ref = useRef<HTMLPreElement>(null)
  useLayoutEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [ref])

  return <div>
    <Typography variant='h5'>{title}</Typography>
    <div>
      <pre ref={ref} className='language-typescript'>{sourceCode}</pre>
      {children}
    </div>
  </div>
}
