import React, {useLayoutEffect, useRef} from 'react'
import Prism from '../../vendor/prism'

const TypescriptCode = ({ children } : { children: string }) => {
  const ref = useRef<HTMLPreElement>(null)
  useLayoutEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [ref])

  return (<pre ref={ref} className='language-typescript'>{children}</pre>)
}

export default TypescriptCode
