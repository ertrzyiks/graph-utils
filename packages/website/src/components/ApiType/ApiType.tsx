import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Link as MuiLink,
  Typography
} from '@material-ui/core'
import {Link} from 'gatsby'

import TypescriptCode from '../TypescriptCode'

interface ApiTypeProps {
  name: string
  slug: string
  signature: string
  children?: string
}

export default function ApiType({ slug, name, signature, children }: ApiTypeProps) {
  return (
    <div id={slug} style={{ paddingTop: 64, marginTop: -64 }}>
      <Card raised>
        <CardContent>
          <Typography variant='caption' color='textSecondary'>Type</Typography>

          <Typography variant='h4'>
            <MuiLink component={Link} to={`#${slug}`} underline='none' color='inherit'>
              {name}
            </MuiLink>
          </Typography>

          <Box my={3}>
            <Typography variant='body1'>{children}</Typography>
          </Box>

          <TypescriptCode>{signature}</TypescriptCode>
        </CardContent>
      </Card>
    </div>
  )
}
