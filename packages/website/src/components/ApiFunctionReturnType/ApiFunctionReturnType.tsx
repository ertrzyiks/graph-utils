import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
      <Box mb={3}>
        <Typography variant='body1'>Return value</Typography>
      </Box>
      <TableContainer>
        <Table size='small'>
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
