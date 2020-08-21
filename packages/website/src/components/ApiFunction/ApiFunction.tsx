import React, {useLayoutEffect, useRef} from 'react'
import Prism from '../../vendor/prism'
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
  const ref = useRef<HTMLPreElement>(null)
  useLayoutEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [ref])


  return (
    <div id={data.slug} style={{ paddingTop: 64, marginTop: -64 }}>
      <Card>
        <CardContent>
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

          <pre ref={ref} className='language-typescript'>{data.signature}</pre>

          {data.jsDoc && (
            <div>
              <ApiFunctionParameters jsDoc={data.jsDoc} />
              <ApiFunctionExamples jsDoc={data.jsDoc} />
              <ApiFunctionReturnType jsDoc={data.jsDoc} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
