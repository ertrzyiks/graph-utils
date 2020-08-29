import React from "react"
import Typography from "@material-ui/core/Typography"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { GetReadmeQuery } from '../graphqlTypes'

export default function IndexPage() {
  const data = useStaticQuery<GetReadmeQuery>(graphql`
    query GetReadme {
      allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/graph-utils/README.md"}}) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <SEO title="Home"/>
      <Typography variant='body1' component='div' dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html ?? '' }} />
    </Layout>
  )
}
