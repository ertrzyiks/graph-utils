import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { ListItem, ListItemText } from '@material-ui/core'
import ExampleContainer from "../components/ExampleContainer/ExampleContainer"
import Layout from "../components/Layout"
import examples from '../examples'
import { GetAllExamplesQuery } from '../graphqlTypes'

interface ExamplePageProps {
  data: GetAllExamplesQuery
  pageContext: {
    example: {
      slug: string
      description: string
      title: string
      mainContent: string
      fullContent: string
    }
    content: string
  }
  location: string
}


export default function ExamplePage({ data, pageContext, location }: ExamplePageProps) {
  const { example } = pageContext
  const Component = examples[example.slug]

  const drawerList = data.allExample.edges.map(({ node }: { node: any }) => (
    <ListItem component={Link} to={`/examples/${node.slug}`} button key={node.slug} selected={node.slug === example.slug}>
      <ListItemText primary={node.shortTitle} />
    </ListItem>
  ))

  return <Layout drawerList={drawerList}>
    <SEO title="Page two" />

    <ExampleContainer title={example.title} description={example.description} sourceCode={pageContext.example.mainContent}>
      <Component />
    </ExampleContainer>
  </Layout>
}

export const pageQuery = graphql`
  query getAllExamples {
    allExample(sort: {fields: position}) {
      edges {
        node {
          shortTitle
          slug  
        }
      }
    }
  }
`
