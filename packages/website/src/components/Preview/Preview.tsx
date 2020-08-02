import React, {ReactNode, useLayoutEffect, useRef} from 'react'
import Grid from '@material-ui/core/Grid'
import Prism from '../../vendor/prism'

const Preview = ({ raw, visual}: { raw: object, visual: ReactNode }) => {
  const ref = useRef<HTMLPreElement>(null)
  useLayoutEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [ref])

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <pre ref={ref} className='language-json' style={{ margin: 0 }}>{JSON.stringify(raw, null, 2)}</pre>
      </Grid>
      <Grid item xs={6}>
        {visual}
      </Grid>
    </Grid>
  )
}

export default Preview
