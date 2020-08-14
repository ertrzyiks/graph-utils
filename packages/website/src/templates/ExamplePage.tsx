import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { Typography, Drawer, List, ListItem, ListItemText, Divider, Toolbar } from '@material-ui/core'
import ExampleContainer from "../components/ExampleContainer/ExampleContainer"
import Layout from "../components/Layout"
import examples from '../examples'

interface ExamplePageProps {
  data: any
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

  return <Layout>
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary='Basic examples' />
        </ListItem>

        {data.allExample.edges.map(({ node }: { node: any }) => (
          <ListItem component={Link} to={`/examples/${node.slug}`} button key={node.slug} selected={node.slug === example.slug}>
            <ListItemText primary={node.shortTitle} />
          </ListItem>
        ))}
      </List>
    </Drawer>

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
