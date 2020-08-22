import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Link as MuiLink,
  Typography
} from '@material-ui/core'
import {Link} from 'gatsby'

import ApiFunctionParameters from '../ApiFunctionParametrs'
import ApiFunctionExamples from '../ApiFunctionExamples'
import ApiFunctionReturnType from '../ApiFunctionReturnType'
import TypescriptCode from '../TypescriptCode'
import { JsDoc } from '../../types'

interface FunctionType {
  name: string
  slug: string
  signature: string
  params: {
    name: string
    type: string
  }[]
  jsDoc: JsDoc | null
}

export default function ApiFunction({ data }: { data: FunctionType }) {
  return (
    <div id={data.slug} style={{ paddingTop: 64, marginTop: -64 }}>
      <Card raised>
        <CardContent>
          <Typography variant='caption' color='textSecondary'>Function</Typography>

          <Typography variant='h4'>
            <MuiLink component={Link} to={`#${data.slug}`} underline='none' color='inherit'>
              {data.name}
            </MuiLink>
          </Typography>

          {data.jsDoc?.comment && (
            <Box my={3}>
              <Typography variant='body1'>{data.jsDoc.comment}</Typography>
            </Box>
          )}

          <TypescriptCode>{data.signature}</TypescriptCode>

          {data.jsDoc && (
            <div>
              <ApiFunctionParameters jsDoc={data.jsDoc} />
              <ApiFunctionReturnType jsDoc={data.jsDoc} />
              <ApiFunctionExamples jsDoc={data.jsDoc} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
