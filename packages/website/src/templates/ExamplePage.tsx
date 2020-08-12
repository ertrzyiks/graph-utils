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
          <ListItem component={Link} to={`/examples/${node.slug}`} button key={node.title} selected={node.slug === example.slug}>
            <ListItemText primary={node.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>

    <SEO title="Page two" />
    <Typography variant='h2'>Example</Typography>

    <ExampleContainer title={example.title} sourceCode={pageContext.example.mainContent}>
      <Component />
    </ExampleContainer>
  </Layout>
}

export const pageQuery = graphql`
  query getAllExamples {
    allExample(sort: {fields: position}) {
      edges {
        node {
          title
          slug  
        }
      }
    }
  }
`
