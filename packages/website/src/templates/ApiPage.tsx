import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { Box } from '@material-ui/core'
import Layout from "../components/Layout"
import ApiFunction from '../components/ApiFunction'

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

interface ExamplePageProps {
  data: {
    allFunction: {
      nodes: FunctionType[]
    }
  }
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
        params {
          name
          type
        }
        jsDoc {
          comment
          tags {
            comment
            name
            type  
            tagName
          }
        }
      }
    }
  }
`
