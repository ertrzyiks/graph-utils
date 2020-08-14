import React, { ReactNode, useRef, useLayoutEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Prism from '../../vendor/prism'

interface ExampleProps {
  title: string
  description: string
  sourceCode: string
  children: ReactNode
}

export default function ExampleContainer({
  title,
  description,
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
    <Typography variant='h3'>{title}</Typography>
    <Typography variant='body1'>{description}</Typography>
    <div>
      <pre ref={ref} className='language-typescript'>{sourceCode}</pre>
      {children}
    </div>
  </div>
}
