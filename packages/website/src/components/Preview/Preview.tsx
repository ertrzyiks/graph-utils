import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'

const Preview = ({ raw, visual}: { raw: object, visual: ReactNode }) => (
  <Grid container spacing={3}>
    <Grid item xs={6}>
      <pre>{JSON.stringify(raw, null, 2)}</pre>
    </Grid>
    <Grid item xs={6}>
      {visual}
    </Grid>
  </Grid>
)

export default Preview
