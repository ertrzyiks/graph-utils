import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { Box } from '@material-ui/core'
import Layout from "../components/Layout"
import ApiFunction from '../components/ApiFunction'
import ApiType from '../components/ApiType'

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

    <Box mb={10}>
      <ApiType name='Graph' slug='graph' signature='Graph<NodeData = {}, EdgeData = {}>'>
        Graph type is a core of the library. It accepts two generic parameters: shape of the custom properties of the nodes
        and edges.
      </ApiType>
    </Box>

    <Box mb={10}>
      <ApiType name='NodeId' slug='nodeid' signature='NodeId = string'>
        The library supports only string ids for the nodes. To distinguish it from other string values all functions taking
        node is as a param use NodeId alias to hint it's purpose.
      </ApiType>
    </Box>

    {functions.map((fn, index) => (
      <Box key={index} mb={10}>
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
