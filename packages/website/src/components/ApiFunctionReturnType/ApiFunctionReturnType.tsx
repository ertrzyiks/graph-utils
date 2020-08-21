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

const getReturnType = (jsDoc: JsDoc) => {
  return jsDoc.tags.find(tag => tag.tagName === 'return')
}

const ApiFunctionReturnType = ({ jsDoc }: { jsDoc: JsDoc }) => {
  const returnType = getReturnType(jsDoc)

  if (!returnType) {
    return null
  }

  return (
    <Box my={2}>
      <Box my={3}>
        <Typography variant='h6'>Return value</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">{returnType.type}</TableCell>
              <TableCell component="th" scope="row">{returnType.comment}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ApiFunctionReturnType
