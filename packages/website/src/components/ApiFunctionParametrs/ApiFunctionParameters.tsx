import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'
import React from 'react'

import { JsDoc } from '../../types'

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

const getParams = (jsDoc: JsDoc) => {
  return jsDoc.tags.filter(entry => entry.tagName === 'param' && !entry.name?.includes('.'))
}


const ApiFunctionParameters = ({ jsDoc }: { jsDoc: JsDoc }) => {
  const params = jsDoc ? getParams(jsDoc) : []

  if (params.length === 0) {
    return null
  }

  return (
    <Box my={2}>
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
            {params.map((param, index) => (
              <React.Fragment key={index}>
                <TableRow >
                  <TableCell component="th" scope="row">{param.name}</TableCell>
                  <TableCell component="th" scope="row">{param.type}</TableCell>
                  <TableCell component="th" scope="row">{param.name && jsDoc ? getDescriptionOf(jsDoc, param.name) : null}</TableCell>
                </TableRow>
                {param.name && getNestedParamsOf(jsDoc, param.name).map((entry, entryIndex) => (
                  <TableRow key={`${index}-${entryIndex}`}>
                    <TableCell component="th" scope="row"><Box ml={5}>{entry.name}</Box></TableCell>
                    <TableCell component="th" scope="row">{entry.type}</TableCell>
                    <TableCell component="th" scope="row">{entry.comment}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ApiFunctionParameters
