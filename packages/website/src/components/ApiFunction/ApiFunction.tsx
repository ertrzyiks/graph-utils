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
    name?: string
    type?: string
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

const getNestedParamsOf = (jsDoc: JsDoc, paramName: string) => {
  return jsDoc.tags
    .filter(entry => entry.name?.startsWith(`${paramName}.`))
    .map(entry => {
      const name = entry.name?.replace(`${paramName}.`, '')

      console.log(entry)
      return {
        ...entry,
        name: name === 'rest' ? '...rest' : name
      }
    })
}

const getExamples = (jsDoc: JsDoc) => {
  return jsDoc.tags.filter(entry => entry.tagName === 'example')
}

export default function ApiFunction({ data }: { data: FunctionType }) {
  const ref = useRef<HTMLPreElement>(null)
  useLayoutEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [ref])

  const examples = data.jsDoc ? getExamples(data.jsDoc) : []
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
                  {data.params.map((param, index) => (
                    <>
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">{param.name}</TableCell>
                        <TableCell component="th" scope="row">{param.type}</TableCell>
                        <TableCell component="th" scope="row">{data.jsDoc ? getDescriptionOf(data.jsDoc, param.name) : null}</TableCell>
                      </TableRow>
                      {data.jsDoc && getNestedParamsOf(data.jsDoc, param.name).map((entry, entryIndex) => (
                        <TableRow key={`${index}-${entryIndex}`}>
                          <TableCell component="th" scope="row"><Box ml={5}>{entry.name}</Box></TableCell>
                          <TableCell component="th" scope="row">{entry.type}</TableCell>
                          <TableCell component="th" scope="row">{entry.comment}</TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}

                </TableBody>
              </Table>
            </TableContainer>
            {examples.length > 0 && (
              <Box my={2}>
                {examples.map((example, index) => (
                  <Box my={1}>
                    <Typography variant='h6'>Example {index + 1}</Typography>

                    <pre>{example.comment}</pre>
                  </Box>
                ))}
              </Box>
            )}

          </div>
        </CardContent>
      </Card>
    </div>
  )
}
