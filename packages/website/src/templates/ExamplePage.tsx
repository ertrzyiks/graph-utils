import React, { Suspense } from 'react'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { Typography, Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import Example from "../components/Example/Example"
import Layout from "../components/Layout"
import examples from '../examples'

interface ExamplePageProps {
  data: any
  pageContext: {
    exampleName: string
    content: string
  }
  location: string
}

export default function ExamplePage({ data, pageContext, location }: ExamplePageProps) {
  const Component = examples[pageContext.exampleName]

  return <Layout>
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List>
        {data.allFile.edges.map(({ node }: { node: any }) => (
          <ListItem component={Link} to={`/examples/${node.name}`} button key={node.name}>
            <ListItemText primary={node.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>

    <SEO title="Page two" />
    <Typography variant='h2'>Example</Typography>

    <Example title={pageContext.exampleName} sourceCode={pageContext.content}>
      <Component />
    </Example>

    <ul>
    {data.allFile.edges.map(({ node }: { node: any }) => (
      <li>{node.name}</li>
    ))}
    </ul>

  </Layout>
}

export const pageQuery = graphql`
  query examplesByName {
    allFile(filter: {sourceInstanceName: {eq: "examples"} }) {
      edges {
        node {
          name
        }
      }
    }
  }
`
