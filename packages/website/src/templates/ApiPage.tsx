import React, {useLayoutEffect, useRef} from 'react'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { Box, Card, CardContent, Typography } from '@material-ui/core'
import Layout from "../components/Layout"
import Prism from "../vendor/prism";

interface FunctionType {
  name: string
  slug: string
  signature: string
}

interface ExamplePageProps {
  data: {
    allFunction: {
      nodes: FunctionType[]
    }
  }
}

const ApiFunction = ({ data }: { data: FunctionType }) => {
  const ref = useRef<HTMLPreElement>(null)
  useLayoutEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [ref])

  return (
    <Card>
      <CardContent>
        <span id={data.slug}/>
        <Typography variant='h4'>{data.name}</Typography>

        <pre ref={ref} className='language-typescript'>{data.signature}</pre>
      </CardContent>
    </Card>
  )
}


export default function ApiPage({ data }: ExamplePageProps) {
  const functions = data.allFunction.nodes

  return <Layout>
    <SEO title='API' />

    {functions.map(fn => (
      <Box m={5}>
        <ApiFunction data={fn} />
      </Box>
    ))}
  </Layout>
}

export const pageQuery = graphql`
  query loadAllFunctions {
    allFunction(sort: {fields: name}) {
      nodes {
        name
        signature
        slug
        jsDoc {
          comment
          tags {
            comment
            name
            tagName
          }
        }
      }
    }
  }
`
