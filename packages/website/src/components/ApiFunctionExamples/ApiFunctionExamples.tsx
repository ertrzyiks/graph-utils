import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { JsDoc } from '../../types'

const getExamples = (jsDoc: JsDoc) => {
  return jsDoc.tags.filter(entry => entry.tagName === 'example')
}

const ApiFunctionExamples = ({ jsDoc }: { jsDoc: JsDoc }) => {
  const examples = getExamples(jsDoc)

  if (examples.length === 0) {
    return null
  }

  return (
    <Box my={2}>
      {examples.map((example, index) => (
        <Box key={index} my={1}>
          <Typography variant='h6'>Example {index + 1}</Typography>

          <pre>{example.comment}</pre>
        </Box>
      ))}
    </Box>
  )
}

export default ApiFunctionExamples
