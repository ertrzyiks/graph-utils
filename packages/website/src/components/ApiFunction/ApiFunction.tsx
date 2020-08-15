import React, {useLayoutEffect, useRef} from 'react'
import Prism from '../../vendor/prism'
import {
  Box,
  Card,
  CardContent,
  Link as MuiLink,
  Paper,
  Table, TableBody, TableCell,
  TableContainer,
  TableHead, TableRow,
  Typography
} from '@material-ui/core'
import {Link} from 'gatsby'

interface JsDoc {
  comment: string
  tags: {
    comment: string
    tagName: string
    name: string
  }[]
}
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

const getDescriptionOf = (jsDoc: JsDoc, paramName: string) => {
  const doc = jsDoc.tags.find(tag => tag.tagName === 'param' && tag.name === paramName)

  if (doc) {
    return doc.comment
  }

  return null
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

          <pre ref={ref} className='language-typescript'>{data.signature}</pre>

          <div>
            <Box my={3}>
              <Typography variant='h6'>Parameters</Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.params.map(param => (
                    <TableRow>
                      <TableCell component="th" scope="row">{param.name}</TableCell>
                      <TableCell component="th" scope="row">{param.type}</TableCell>
                      <TableCell component="th" scope="row">{data.jsDoc ? getDescriptionOf(data.jsDoc, param.name) : null}</TableCell>
                    </TableRow>
                  ))}

                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
